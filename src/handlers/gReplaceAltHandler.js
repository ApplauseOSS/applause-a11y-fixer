const {S} = require('../constants/constants');

/**
 * Replaces the "alt" attribute of the specified violation node
 * Axe ID:
 *   area-alt https://dequeuniversity.com/rules/axe/3.0/area-alt
 * WCAG:
 *   1.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function GReplaceAltHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('alt', S.CHANGE_ME);
  });
}

module.exports = GReplaceAltHandler;
