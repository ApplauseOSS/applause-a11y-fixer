/**
 * Replaces the "lang" attribute of the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function replaceLangHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node['element'];
    element.setAttribute('lang', 'en');
  });
}

module.exports = replaceLangHandler;
