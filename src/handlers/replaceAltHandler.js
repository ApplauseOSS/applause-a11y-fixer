/**
 * Replaces the "alt" attribute of the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function replaceAltHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node['element'];
    element.setAttribute('alt', 'CHANGE_ME');
  });
}

module.exports = replaceAltHandler;
