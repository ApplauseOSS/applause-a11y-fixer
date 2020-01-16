const {S} = require('../constants/constants');

/** Ensure that the page, or at least one of its frames contains a level-one heading
 * Axe ID:
 *   page-has-heading-one https://dequeuniversity.com/rules/axe/3.0/page-has-heading-one
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function pageHasHeadingOneHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const body = element.getElementsByTagName('body')[0];
    const h1 = dom.window.document.createElement('h1');
    h1.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
    body.firstChild.parentNode.insertBefore(h1, body.firstChild);
  });
}

module.exports = pageHasHeadingOneHandler;
