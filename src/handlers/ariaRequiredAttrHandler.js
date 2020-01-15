const {S, SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/** Add any aria attributes that are additionally required for the violation node
 * Axe ID:
 *   aria-required-attr https://dequeuniversity.com/rules/axe/3.0/aria-required-attr
 * WCAG:
 *   4.1.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaRequiredAttrHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;

    const missingAttrs = getRelated(node, SelectorType.ANY, SubNodeType.DATA);

    missingAttrs.forEach((attr) => {
      element.setAttribute(attr, S.CHANGE_ME);
    });
  });
}

module.exports = ariaRequiredAttrHandler;
