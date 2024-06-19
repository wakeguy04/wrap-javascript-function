const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const isEven = (num) => num % 2 === 0;