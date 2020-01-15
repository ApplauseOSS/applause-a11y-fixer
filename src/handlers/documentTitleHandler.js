const {S} = require('../constants/constants');

/** Ensures each HTML document contains a non-empty <title> element
 * Axe ID:
 *   document-title https://dequeuniversity.com/rules/axe/3.0/document-title
 * WCAG:
 *   2.4.2
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function documentTitleHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach(() => {
    const head = dom.window.document.head;
    let title = head.getElementsByTagName('title')[0];
    if (title === undefined) {
      title = dom.window.document.createElement('title');
      head.appendChild(title);
    }
    title.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
  });
}

module.exports = documentTitleHandler;
