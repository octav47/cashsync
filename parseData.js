const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, 'data');
const dataRawPath = path.resolve(dataPath, 'raw');

const getDate = dateString => {
  const splittedDateString = dateString.split(/\s/);

  return splittedDateString[0];
};

// TODO complete this method
const getLatestFile = () => {
  const files = fs.readdirSync(dataRawPath);

  return files[files.length - 1];
};

const parseFile = filePath => {
  const data = fs.readFileSync(path.resolve(dataRawPath, filePath), 'utf8');
  const dataJSON = {
    updatedAt: filePath.replace(/(CashSync Transactions )|(.csv)/g, ''),
    balance: 0,
    total: {
      income: 0,
      spending: 0,
    },
    items: {},
  };
  const items = data.split('\n').filter(row => row && row.includes('Альфа'));

  dataJSON.count = items.length;

  items.forEach(row => {
    const splittedRow = row.replace(/"/g, '').split(',');
    const [dateString, amountString, , , , category] = splittedRow;
    const date = getDate(dateString);
    const amount = +amountString;
    const propName = amount > 0 ? 'income' : 'spending';

    dataJSON.total[propName] += amount;

    if (!dataJSON.items[date]) {
      dataJSON.items[date] = {
        current: 0,
        sum: 0,
        income: {
          sum: 0,
          count: 0,
          categories: {},
        },
        spending: {
          sum: 0,
          count: 0,
          categories: {},
        },
      };
    }

    if (!dataJSON.items[date][propName][category]) {
      dataJSON.items[date][propName].categories[category] = [];
    }

    dataJSON.items[date][propName].categories[category].push(amount);
    dataJSON.items[date][propName].sum += amount;
    dataJSON.items[date][propName].count++;

    dataJSON.items[date].sum += amount;
  });

  dataJSON.balance = dataJSON.total.income + dataJSON.total.spending;

  Object.keys(dataJSON.items).forEach((key, i, keys) => {
    if (i > 0) {
      const item = dataJSON.items[key];
      const prev = dataJSON.items[keys[i - 1]];

      item.current = prev.current + item.sum;

      dataJSON.items[key] = item;
    } else {
      const item = dataJSON.items[key];

      item.current = item.sum;

      dataJSON.items[key] = item;
    }
  });

  return dataJSON;
};

const writeDataJSON = data => {
  fs.writeFileSync(
    path.resolve(dataPath, 'data.json'),
    JSON.stringify(data, null, 2)
  );
};

const run = () => {
  const dataFile = getLatestFile();
  const data = parseFile(dataFile);

  writeDataJSON(data);
};

run();
