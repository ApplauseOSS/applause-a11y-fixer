const {AXE_RULES} = require('../config/handlerMap');
const {createDOM, getFromPathOrUrl} = require('./../utils/domUtils');
const {applyRules} = require('./../utils/axeUtils');
const {formatViolation} = require('./../utils/formatUtils');


/**
 * Report violations for the specified input
 * @param {string} pathOrUrl the input
 * @param {boolean} jsonOutput should the result be human-readable or json formatted
 */
async function reportViolations(pathOrUrl, jsonOutput = false) {
  const html = await getFromPathOrUrl(pathOrUrl);
  const dom = createDOM(html);

  const violations = (await applyRules(dom, AXE_RULES))['violations'];

  let output;
  if (jsonOutput) {
    output = JSON.stringify(violations, null, 4);
  } else {
    if (!violations.length) {
      output = 'No violations found. Nice!';
    } else {
      output = `${violations.map(formatViolation).join('\n\n')}`;
    }
  }
  process.stdout.write(output + '\n');
}

module.exports = reportViolations;
