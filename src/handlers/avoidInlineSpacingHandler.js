const {SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/** Ensure that text spacing set through style attributes can be adjusted with custom stylesheets
 * Axe ID:
 *   avoid-inline-spacing https://dequeuniversity.com/rules/axe/3.3/avoid-inline-spacing
 * WCAG:
 *  1.4.12
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function avoidInlineSpacingHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, index) => {
    const element = node.element;

    const relatedStyleTags = getRelated(node, SelectorType.ALL, SubNodeType.DATA);
    relatedStyleTags.forEach((styleItem) => {
      const value = element.style.getPropertyValue(styleItem);
      element.style.setProperty(styleItem, value, null);
    });
  });
}

module.exports = avoidInlineSpacingHandler;
