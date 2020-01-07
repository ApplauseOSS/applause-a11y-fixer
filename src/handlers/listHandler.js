/**
 * Wraps the specified violation node value with a `li`
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function listHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const relatedNodes = node['none'][0]['relatedNodes'];
    relatedNodes.forEach((related) => {
      const element = related.element;
      const li = dom.window.document.createElement('li');
      element.parentNode.insertBefore(li, element);

      li.innerHTML = element.innerHTML;
      Array.from(element.attributes).forEach((attr) => li.setAttribute(attr.name, attr.value));

      element.remove();
    });
  });
}

module.exports = listHandler;
