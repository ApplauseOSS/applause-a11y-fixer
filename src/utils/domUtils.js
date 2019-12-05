const JSDOM = require('jsdom').JSDOM;
const got = require('got');
const fsp = require('fs').promises;


/** Create a new `[JS]DOM` instance for the specified `input`
 * @param {string} input the input
 * @return {object} the result
 */
function createDOM(input) {
  return new JSDOM(input, {includeNodeLocations: true});
}

/**
 * get the html from a file or url
 * @param {string} pathOrUrl
 * @return {Promise<string>}
 */
async function getFromPathOrUrl(pathOrUrl) {
  let input;
  if (pathOrUrl.match(/^http[s]?:\/\//)) {
    input = (await got(pathOrUrl)).body;
  } else {
    input = await fsp.readFile(pathOrUrl, 'utf8');
  }
  return input;
}

exports.getFromPathOrUrl = getFromPathOrUrl;
exports.createDOM = createDOM;
