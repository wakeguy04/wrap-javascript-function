console.log("0 || 1 = "+(0 || 1));
const flattenedArray = arr => [].concat(...arr);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);