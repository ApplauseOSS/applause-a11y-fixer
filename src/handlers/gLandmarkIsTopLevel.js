/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function gLandmarkIsTopLevel(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.parentNode.after(element);
  });
}

module.exports = gLandmarkIsTopLevel;
