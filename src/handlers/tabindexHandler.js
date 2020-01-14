/**
 * Set the "tabindex" attribute for the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function tabIndexHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node['element'];
    element.setAttribute('tabindex', '0');
  });
}

module.exports = tabIndexHandler;
