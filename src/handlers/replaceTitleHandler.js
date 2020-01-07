/**
 * Replaces the "title" attribute of the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function replaceTitleHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node['element'];
    element.setAttribute('title', 'CHANGE_ME');
  });
}

module.exports = replaceTitleHandler;
