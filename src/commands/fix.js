const {HANDLER_MAP, AXE_RULES} = require('../config/handlerMap');
const {createDOM, getFromPathOrUrl} = require('./../utils/domUtils');
const {applyRules} = require('./../utils/axeUtils');
const fsp = require('fs').promises;
const pretty = require('pretty');

/**
 * Attempts to fix a violation
 * @param {object} dom the dom
 * @param {object} violation the violation
 */
async function fixViolation(
  dom,
  violation,
) {
  process.stdout.write(`Fixing violation: ${violation.id}\n`);
  const handler = HANDLER_MAP[violation['id']];
  if (!handler) {
    return;
  }

  const violationNodes = violation['nodes'];
  if (!violationNodes.length) {
    return;
  }

  handler(
    violationNodes,
    dom,
  );
}

/**
 * Fix violations for the specified input
 * @param {string} pathOrUrl the input
 * @param {string} targetPath the output file
 * @param {boolean} previewOnly only preview the operation, dont write the file
 * @return {string} the result
 */
async function fixViolations(pathOrUrl, targetPath, previewOnly = false) {
  if (targetPath === undefined) {
    throw Error('[target-file] is not set.');
  }

  let document = await getFromPathOrUrl(pathOrUrl);
  const dom = createDOM(document);

  const violations = (await applyRules(dom, Object.values(AXE_RULES)))['violations'];

  for (const violation of violations) {
    await fixViolation(
      dom,
      violation,
    );
  }

  document = pretty(dom.serialize(), {ocd: true});

  if (previewOnly === true) {
    process.stdout.write(document);
  } else {
    await fsp.writeFile(targetPath, document, {encoding: 'utf-8'});
  }
}

module.exports = fixViolations;
