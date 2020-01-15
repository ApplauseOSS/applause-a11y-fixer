const {S, T} = require('../constants/constants');

/** Ensures <dl> elements are structured correctly
 * Axe ID:
 *   definition-list https://dequeuniversity.com/rules/axe/3.3/definition-list
 * WCAG:
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function definitionListHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, nodeIndex) => {
    const element = node.element;
    const childNodes = [];
    element.childNodes.forEach((n) => {
      if (n.tagName) {
        childNodes.push(n);
      }
    });

    let previous = null;
    childNodes.forEach((child, index) => {
      const isLast = index === childNodes.length-1;

      switch (child.tagName) {
      case T.DD:
        if (previous === null || previous['tagName'] !== T.DT) {
          const dt = dom.window.document.createElement(T.DT);
          dt.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
          child.before(dt);
        }
        break;

      case T.DT:
        const dd = dom.window.document.createElement(T.DD);
        dd.appendChild(dom.window.document.createTextNode(S.CHANGE_ME));
        if (previous['tagName'] === T.DT) {
          previous.after(dd);
        }
        if (isLast) {
          child.after(dd);
        }
        break;
      }

      previous = child;
    });
  });
}

module.exports = definitionListHandler;
