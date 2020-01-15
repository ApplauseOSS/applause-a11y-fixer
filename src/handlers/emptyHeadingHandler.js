const {S} = require('../constants/constants');

/** Ensures headings have discernible text
 * Axe ID:
 *   empty-heading https://dequeuniversity.com/rules/axe/3.0/empty-heading
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function emptyHeadingHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, nodeIndex) => {
    const element = node.element;
    element.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
  });
}

module.exports = emptyHeadingHandler;
