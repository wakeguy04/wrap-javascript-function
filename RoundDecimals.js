console.log("0 && 1 = "+(0 && 1));
const minNumber = arr => Math.min(...arr);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const resultingPromises = urls.map((url) => makHttpRequest(url));