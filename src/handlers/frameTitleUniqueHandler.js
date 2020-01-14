/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function frameTitleUniqueHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, index) => {
    const element = node.element;
    const title = element.getAttribute('title');
    element.setAttribute('title', `${title} ${index}`);
  });
}

module.exports = frameTitleUniqueHandler;
