/*
 * Set data into Chrome's storage.
 * This expects you to pass it an object. Eg: { color: 'red' }
 */
const saveChromeData = object => chrome.storage.sync.set(object);

/*
 * Get data from Chrome's storage.
 * This expects you to pass it an object key (string), or multiple keys (array), and a callback
 * that gets passed the returned data.
 */
const getChromeData = (key, callback) => chrome.storage.sync.get(key, callback);
