const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const appName = getAppName(channel);
const fullName = name || 'buddy';
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const apmRootPath = path.join(repositoryRootPath, 'apm');