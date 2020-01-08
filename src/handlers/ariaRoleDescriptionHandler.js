/**
 * Update the "aria-roledescription" for the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function ariaRoleDescriptionHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    node.element.removeAttribute('aria-roledescription');
  });
}

module.exports = ariaRoleDescriptionHandler;
