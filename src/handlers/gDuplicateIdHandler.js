const {SubNodeType, SelectorType} = require('../constants/constants');
const {getRelated} = require('../utils/handlerUtils');

/** Ensures every id attribute value or usage is unique
 * Axe ID:
 *   duplicate-id https://dequeuniversity.com/rules/axe/3.0/duplicate-id
 *   duplicate-id-active https://dequeuniversity.com/rules/axe/3.3/duplicate-id-active
 *   duplicate-id-aria https://dequeuniversity.com/rules/axe/3.3/duplicate-id-aria
 * WCAG:
 *   4.1.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gDuplicateIdHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const relatedElements = getRelated(node, SelectorType.ANY, SubNodeType.ELEMENTS);
    const duplicateIdElements = [node.element].concat(relatedElements);

    for (const [i, element] of duplicateIdElements.entries()) {
      element.setAttribute('id', `${element.getAttribute('id')}_${i}`);
    }
  });
}

module.exports = gDuplicateIdHandler;
