/**
 * ARIA roles used must conform to valid values
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaRolesHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('role', 'CHANGE_OR_REMOVE');
  });
}

module.exports = ariaRolesHandler;
