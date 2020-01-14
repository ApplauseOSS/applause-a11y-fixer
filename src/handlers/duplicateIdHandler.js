/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function duplicateIdHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const duplicateIdElements = node['any'].reduce((duplicateIdElements, related) => {
      return duplicateIdElements.concat(related['relatedNodes'].map((relatedNode) => {
        return relatedNode.element;
      }));
    }, [node.element]);

    for (const [i, element] of duplicateIdElements.entries()) {
      element.setAttribute('id', `${element.getAttribute('id')}_${i}`);
    }
  });
}

module.exports = duplicateIdHandler;
