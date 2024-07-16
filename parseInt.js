const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const scriptRootPath = path.join(repositoryRootPath, 'script');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';