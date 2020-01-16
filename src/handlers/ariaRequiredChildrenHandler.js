const {newLineNode} = require('../utils/miscUtils');

/** Ensures elements with an ARIA role that require child roles contain them
 * Axe ID:
 *   aria-required-children https://dequeuniversity.com/rules/axe/3.1/aria-required-children
 * WCAG:
 *   1.3.1
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function ariaRequiredChildrenHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, index) => {
    const element = node.element;
    const role = element.getAttribute('role');
    if (role === 'combobox') {
      element.setAttribute('aria-owns', `owned_listbox_${index}`);
      element.setAttribute('aria-haspopup', 'listbox');

      const input = dom.window.document.createElement('input');
      input.setAttribute('aria-controls', `owned_listbox_${index}`);

      element.appendChild(input);
      input.before(newLineNode(dom));
      input.after(newLineNode(dom));

      const ul = dom.window.document.createElement('ul');
      ul.setAttribute('id', `owned_listbox_${index}`);
      ul.setAttribute('role', 'listbox');
      element.after(ul);
    }
  });
}

module.exports = ariaRequiredChildrenHandler;
