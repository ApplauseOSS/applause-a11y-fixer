const {S, T} = require('../constants/constants');

/** Ensures every form element has a label
 * Axe ID:
 *   label https://dequeuniversity.com/rules/axe/3.2/label
 *   label-title-only https://dequeuniversity.com/rules/axe/3.2/label-title-only
 * WCAG:
 *   3.3.2
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function labelHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const label = dom.window.document.createElement(T.LABEL);
    label.setAttribute('for', element.getAttribute('id'));
    label.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
    element.parentNode.insertBefore(label, element);
  });
}

module.exports = labelHandler;
