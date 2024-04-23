const value = ( 5 < 7 ) ? "True" : "False" ;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);