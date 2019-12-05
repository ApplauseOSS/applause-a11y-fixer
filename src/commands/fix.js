const {HANDLER_MAP, AXE_RULES} = require('./../handlers/handlerMap');
const {createDOM, getFromPathOrUrl} = require('./../utils/domUtils');
const {applyRule} = require('./../utils/axeUtils');
const fsp = require('fs').promises;

/**
 * Attempts to fix a violation
 * @param {object} dom the dom
 * @param {string} document the document
 * @param {array} violation the violation
 * @return {string} the result
 */
async function fixViolation(
    dom,
    document,
    violation,
) {
  const handler = HANDLER_MAP[violation['id']];
  if (!handler) {
    return document;
  }

  const violationNodes = violation['nodes'];
  if (!violationNodes.length) {
    return document;
  }

  return violationNodes.reduce(
      (memo, violationNode) => (
        handler(
            violationNode,
            dom,
            memo,
        )
      ),
      document,
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
  let document = await getFromPathOrUrl(pathOrUrl);

  for (const rule of Object.values(AXE_RULES)) {
    const dom = createDOM(document);

    const violations = (await applyRule(dom, rule))['violations'];
    if (!violations.length) {
      continue;
    }

    document = await fixViolation(
        dom,
        document,
        violations[0],
    );
  }

  if (previewOnly === true) {
    process.stdout.write(document + '\n');
  } else {
    await fsp.writeFile(targetPath, document, {encoding: 'utf-8'});
  }
}

module.exports = fixViolations;
