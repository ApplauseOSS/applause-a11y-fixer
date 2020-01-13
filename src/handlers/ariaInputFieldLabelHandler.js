const uuidv4 = require('uuid/v4');

/**
 * Update the "aria-label" or create a <label> for orphaned "aria-labelledby"
 * for the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaInputFieldLabelHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node.element;
    if (element.hasAttribute('aria-label')) {
      element.setAttribute('aria-label', 'CHANGE_ME');
    } else if (element.hasAttribute('aria-labelledby')) {
      const label = dom.window.document.createElement('label');
      element.parentNode.insertBefore(label, element);
      label.setAttribute('id', element.getAttribute('aria-labelledby'));
      label.innerHTML = 'CHANGE_ME';
    } else if (element.parentNode.tagName === 'LABEL') {
      const label = element.parentNode;
      let id = label.getAttribute('id');
      if (id === null) {
        id = `ID_${uuidv4()}`;
        label.setAttribute('id', id);
      }
      element.setAttribute('aria-labelledby', id);
    }
  });
}

module.exports = ariaInputFieldLabelHandler;
