const {SelectorType} = require('../constants/constants');
const {landmarkNoDuplicate} = require('../utils/handlerUtils');

/**
 * Axe ID:
 *   landmark-no-duplicate-contentinfo https://dequeuniversity.com/rules/axe/3.0/landmark-no-duplicate-contentinfo
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function landmarkNoDuplicateContentinfoHandler(
  violationNodes,
  dom,
) {
  landmarkNoDuplicate(violationNodes, SelectorType.ANY );
}

module.exports = landmarkNoDuplicateContentinfoHandler;
