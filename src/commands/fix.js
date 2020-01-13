const fsp = require('fs').promises;
const pretty = require('pretty');
const {applyRules} = require('../utils/axeUtils');
const {createDOM, getFromPathOrUrl} = require('../utils/domUtils');
const {FixError} = require('../errors/errors');
const {HANDLER_MAP, AXE_RULES} = require('../config/handlerMap');

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
 * @param {array} rules is a list of strings of rule names to check
 * @return {string} the result
 */
async function fixViolations(pathOrUrl, targetPath, previewOnly = false, rules) {
  if (previewOnly === false && targetPath === undefined) {
    throw new FixError('[target-file] is not set.');
  }

  let document = await getFromPathOrUrl(pathOrUrl);
  const dom = createDOM(document);

  if (rules !== undefined) {
    const validRules = Object.keys(HANDLER_MAP);

    rules.forEach((rule) => {
      if (!validRules.includes(rule)) {
        throw new FixError(`Rule '${rule}' is not implemented.`);
      }
    });

    AXE_RULES.forEach((rule) => {
      if (!rules.includes(rule.id)) {
        rule.enabled = false;
      }
    });
  }

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
