const {createDOM, getFromPathOrUrl} = require('./../utils/domUtils');
const {applyRules} = require('./../utils/axeUtils');
const {formatViolation} = require('./../utils/formatUtils');
const fs = require('fs');
const {promisify} = require('util');

const fsWriteAsync = promisify(fs.write);

/**
 * Report violations for the specified input
 * @param {string} pathOrUrl the input
 * @param {boolean} jsonOutput should the result be human-readable or json formatted
 * @param {array} rules is a list of strings of rule names to check
 * @param {string} userAgent optional custom user-agent string
 */
async function reportViolations(pathOrUrl, jsonOutput = false, rules, userAgent) {
  const html = await getFromPathOrUrl(pathOrUrl, userAgent);
  const dom = createDOM(html);

  if (rules) {
    rules = rules.map((rule) => {
      return {id: rule, enabled: true};
    });
  }

  const violations = (await applyRules(dom, rules, !!rules))['violations'];

  let output;
  if (jsonOutput) {
    output = JSON.stringify(violations, null, 4);
  } else {
    if (!violations.length) {
      output = 'No violations found. Nice!';
    } else {
      output = `${violations.map((violation) => formatViolation(violation, dom)).join('\n\n')}`;
    }
  }
  output = output + '\n';
  await fsWriteAsync(1, output);
}

module.exports = reportViolations;
