const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const getRandomBoolean = () => Math.random() >= 0.5;