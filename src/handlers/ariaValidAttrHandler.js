const {SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/** Strip out _any_ invalid "aria" attributes for the specified violation node
 * Axe ID:
 *   aria-valid-attr https://dequeuniversity.com/rules/axe/3.0/aria-valid-attr
 * WCAG:
 *   4.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function ariaValidAttrHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;

    const invalidAttrs = getRelated(node, SelectorType.ANY, SubNodeType.DATA);

    invalidAttrs.forEach((attr) => element.removeAttribute(attr));
  });
}

module.exports = ariaValidAttrHandler;
