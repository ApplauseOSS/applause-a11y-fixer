const {S} = require('../constants/constants');
/**
 * Replaces the "title" attribute of the specified violation node
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function GReplaceTitleHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    element.setAttribute('title', S.CHANGE_ME);
  });
}

module.exports = GReplaceTitleHandler;
