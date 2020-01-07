/**
 * Wraps the specified violation node value with a `ul`
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function listItemHandler(
  violationNodes,
  dom,
) {
  const elements = violationNodes.map((node) => node.element);
  const first = elements[0];

  const ul = dom.window.document.createElement('ul');
  first.parentNode.insertBefore(ul, first);

  elements.forEach((element) => ul.appendChild(element));
}

module.exports = listItemHandler;
