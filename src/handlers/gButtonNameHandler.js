const {S, T} = require('../constants/constants');

/** Ensure buttons and input buttons have visible text
 * Axe ID:
 *   button-name https://dequeuniversity.com/rules/axe/3.2/button-name
 *   input-button-name https://dequeuniversity.com/rules/axe/3.3/input-button-name
 * WCAG:
 *   4.1.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gButtonNameHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;

    const ariaLabelledby = element.getAttribute('aria-labelledby');
    const ariaLabel = element.getAttribute('aria-label');

    if (ariaLabelledby) {
      let label = dom.window.document.getElementById(ariaLabelledby);
      if (!label) {
        label = dom.window.document.createElement(T.LABEL);
        label.setAttribute('id', ariaLabelledby);
        element.parentNode.insertBefore(label, element);
      }
      label.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
    } else if (!ariaLabel) {
      element.setAttribute('aria-label', S.CHANGE_ME);
    } else {
      element.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
    }
  });
}

module.exports = gButtonNameHandler;
