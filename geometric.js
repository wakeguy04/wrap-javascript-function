const currentDate = () => new Date().toLocaleDateString('en-US');
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);