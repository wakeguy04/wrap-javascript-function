const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];