const JSDOM = require('jsdom').JSDOM;
const {request} = require('http2-client');
const got = require('got');
const fsp = require('fs').promises;
const UserAgent = require('user-agents');
const logger = require('../logging/logger');

/** Create a new `[JS]DOM` instance for the specified `input`
 * @param {string} input the input
 * @return {object} the result
 */
function createDOM(input) {
  // logger.info('Creating DOM...');
  return new JSDOM(input, {includeNodeLocations: true});
}

/**
 * get the html from a file or url
 * @param {string} pathOrUrl
 * @param {string} userAgent optional custom user-agent string
 * @return {Promise<string>}
 */
async function getFromPathOrUrl(pathOrUrl, userAgent) {
  let input;
  if (pathOrUrl.match(/^http[s]?:\/\//)) {
    // logger.info(`Get HTML: ${pathOrUrl} ...`);
    if (!userAgent) {
      userAgent = new UserAgent({deviceCategory: 'desktop'}).toString();
    }

    const gotHttp2 = got.extend({
      request,
      headers: {
        'User-Agent': userAgent,
      },
    });

    try {
      const response = await gotHttp2(pathOrUrl);
      input = response.body;
    } catch (e) {
      throw Error(`Failed to get response from url: ${e.name}`);
    }
  } else {
    // logger.info(`Get File: ${pathOrUrl} ...`);
    input = await fsp.readFile(pathOrUrl, 'utf8');
  }
  return input;
}

exports.getFromPathOrUrl = getFromPathOrUrl;
exports.createDOM = createDOM;
