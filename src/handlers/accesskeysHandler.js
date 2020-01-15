/**
 * Replaces the "accesskey" attribute of the specified violation node
 * Axe ID:
 *   accesskeys https://dequeuniversity.com/rules/axe/3.4/accesskeys
 * WCAG:
 *   n/a
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function accesskeysHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node, nodeIndex) => {
    const element = node.element;

    node['none'].forEach((result) => {
      element.setAttribute('accesskey', `${result.data}_MUST_BE_UNIQUE_${nodeIndex}`);

      for (const [i, relatedNode] of result['relatedNodes'].entries()) {
        relatedNode.element.setAttribute('accesskey', `${result.data}_MUST_BE_UNIQUE_${nodeIndex + i + 1}`);
      }
    });
  });
}

module.exports = accesskeysHandler;
