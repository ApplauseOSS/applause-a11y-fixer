const {S} = require('../constants/constants');
/** Replaces the "title" attribute of the specified violation node
 * Axe ID:
 *   frame-title https://dequeuniversity.com/rules/axe/3.0/frame-title
 * WCAG:
 *   4.1.2
 *   2.4.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function gReplaceTitleHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('title', S.CHANGE_ME);
  });
}

module.exports = gReplaceTitleHandler;
