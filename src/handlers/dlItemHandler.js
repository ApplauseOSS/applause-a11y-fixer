/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function dlItemHandler(
  violationNodes,
  dom,
) {
  const dl = dom.window.document.createElement('dl');
  const first = violationNodes[0].element;
  first.parentNode.insertBefore(dl, first);

  violationNodes.forEach((node) => {
    dl.appendChild(node.element);
  });
}

module.exports = dlItemHandler;
