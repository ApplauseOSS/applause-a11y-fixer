const {SelectorType, T} = require('../constants/constants');
const {landmarkNoDuplicate} = require('../utils/handlerUtils');

/** Ensures the document has at most one banner landmark
 * Axe ID:
 *   landmark-no-duplicate-banner https://dequeuniversity.com/rules/axe/3.3/landmark-no-duplicate-banner
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function landmarkNoDuplicateBannerHandler(
  violationNodes,
  dom,
) {
  landmarkNoDuplicate(violationNodes, SelectorType.ANY, T.HEADER);
}

module.exports = landmarkNoDuplicateBannerHandler;
