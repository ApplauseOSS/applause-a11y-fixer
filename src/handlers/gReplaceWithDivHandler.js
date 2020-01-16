const {replaceWithTag} = require('../utils/handlerUtils');
const {T} = require('../constants/constants');

/** Replaces the specified violation node with div
 * Axe ID:
 *   blink https://dequeuniversity.com/rules/axe/2.6/blink
 *   marquee https://dequeuniversity.com/rules/axe/3.3/marquee
 * WCAG:
 *   2.2.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gReplaceWithDivHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    replaceWithTag(dom, element, T.DIV);
  });
}

module.exports = gReplaceWithDivHandler;
