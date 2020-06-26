const sum = function (array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
};

const mean = function (array) {
  const arraySum = sum(array);

  return arraySum / array.length;
};

const median = function (array, sortFunc = (a, b) => a - b) {
  const sortedArray = array.sort(sortFunc);

  if (sortedArray.length % 2 === 0) {
    // array with even number elements
    return (
      (sortedArray[sortedArray.length / 2] +
        sortedArray[sortedArray.length / 2 - 1]) /
      2
    );
  }

  return array[(array.length - 1) / 2]; // array with odd number elements
};

export { sum, mean, median };
