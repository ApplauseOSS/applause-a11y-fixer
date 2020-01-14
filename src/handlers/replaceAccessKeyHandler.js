/**
 * Replaces the "accesskey" attribute of the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function replaceAccessKeyHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, nodeIndex) => {
    const element = node['element'];
    const result = node['none'][0];

    element.setAttribute('accesskey', `${result.data}_MUST_BE_UNIQUE_${nodeIndex}`);

    for (const [i, relatedNode] of result['relatedNodes'].entries()) {
      relatedNode.element.setAttribute('accesskey', `${result.data}_MUST_BE_UNIQUE_${nodeIndex + i + 1}`);
    }
  });
}

module.exports = replaceAccessKeyHandler;
