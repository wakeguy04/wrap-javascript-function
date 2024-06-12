const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const fullName = name || 'buddy';
const merge = [...new Set([...a, ...b])];