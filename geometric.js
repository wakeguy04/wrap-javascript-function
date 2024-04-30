const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const lastElement = arr => arr[arr.length - 1];