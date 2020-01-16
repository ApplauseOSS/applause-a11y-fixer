const {S, SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/**
 * Axe ID:
 *   aria-valid-attr-value https://dequeuniversity.com/rules/axe/3.0/aria-valid-attr-value
 * WCAG:
 *   4.1.2
 *   4.1.1
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function ariaValidAttrValueHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;

    const invalidValueAttrs = getRelated(node, SelectorType.ALL, SubNodeType.DATA);

    invalidValueAttrs.forEach((attr) => {
      const attrName = attr.split('=')[0];
      const attrValue = element.getAttribute(attrName);
      const newValue = `${S.INVALID}_${attrValue}`;
      element.setAttribute(attrName, newValue);
    });
  });
}

module.exports = ariaValidAttrValueHandler;
