const allResults = await Promise.all(items.map(async (item) => {}));
const uniqueArr = (arr) => [...new Set(arr)];
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;