const {SelectorType, T} = require('../constants/constants');
const {landmarkNoDuplicate} = require('../utils/handlerUtils');

/** Ensures the document has only one main landmark and each iframe in the page has at most one main landmark
 * Axe ID:
 *   landmark-one-main https://dequeuniversity.com/rules/axe/3.3/landmark-one-main
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function landmarkOneMainHandler(
  violationNodes,
  dom,
) {
  landmarkNoDuplicate(violationNodes, SelectorType.ALL, T.MAIN);
}

module.exports = landmarkOneMainHandler;
