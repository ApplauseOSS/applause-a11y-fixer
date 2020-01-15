/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function tableDuplicateNameHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, nodeIndex) => {
    node.element.removeAttribute('summary');
  });
}

module.exports = tableDuplicateNameHandler;
