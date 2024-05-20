const flattenedArray = arr => [].concat(...arr);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const merge = (a, b) => a.concat(b);