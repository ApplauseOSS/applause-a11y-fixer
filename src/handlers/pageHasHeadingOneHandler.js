/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function pageHasHeadingOneHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const body = element.getElementsByTagName('body')[0];
    const h1 = dom.window.document.createElement('h1');
    h1.innerHTML = 'CHANGE_ME';
    body.firstChild.parentNode.insertBefore(h1, body.firstChild);
  });
}

module.exports = pageHasHeadingOneHandler;
