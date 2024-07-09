const resultingPromises = urls.map((url) => makHttpRequest(url));
const channelName = getChannelName(channel);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;