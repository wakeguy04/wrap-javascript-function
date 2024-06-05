const channel = getChannel(computedAppVersion);
const repositoryRootPath = path.resolve(__dirname, '..');
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;