import React from 'react';
import Highstocks from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { mean, median } from '../utils/array';

import data from '../../data/data.json';

const { items } = data;

const getX = dateString => {
  const [y, m, d] = dateString.split('-');

  return Date.UTC(y, m - 1, d);
};

const getDataItem = (dateString, amount = 0) => {
  return {
    x: getX(dateString),
    y: amount,
  };
};

const seriesMap = {};

const createSeries = (
  name,
  maxArrayLength,
  mathFunc,
  seriesOptions = {
    dashStyle: 'Solid',
  }
) => {
  if (!seriesMap[name]) {
    seriesMap[name] = [];
  }

  return {
    type: 'spline',
    name,
    data: Object.keys(items).map(dateString => {
      const item = items[dateString];

      if (seriesMap[name].length === maxArrayLength) {
        seriesMap[name] = seriesMap[name].slice(1);
      }

      seriesMap[name].push(item.spending.sum);

      return getDataItem(dateString, mathFunc(seriesMap[name]));
    }),
    ...seriesOptions,
  };
};

const options = {
  title: {
    text: 'Mean and median',
  },
  chart: {
    height: '1000px',
  },
  legend: {
    enabled: true,
  },
  rangeSelector: {
    selected: 0,
  },
  xAxis: [
    {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b',
      },
      title: {
        text: 'Date',
      },
    },
    {
      type: 'datetime',
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: '%e. %b',
        year: '%b',
      },
      title: {
        text: 'Date',
      },
    },
  ],
  series: [
    createSeries('median 2w', 14, median),
    createSeries('mean 2w', 14, mean, {
      dashStyle: 'Dash',
    }),
    createSeries('median 1w', 7, median),
    createSeries('mean 1w', 7, mean, {
      dashStyle: 'Dash',
    }),
    createSeries('median 30d', 30, median),
    createSeries('mean 30d', 30, mean, {
      dashStyle: 'Dash',
    }),
  ],
};

const Chart = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highstocks}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default Chart;
