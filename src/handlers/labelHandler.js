const {S, T} = require('../constants/constants');

/**
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
