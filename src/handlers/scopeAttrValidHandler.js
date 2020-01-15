const {S} = require('../constants/constants');

/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function scopeAttrValidHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    node.element.setAttribute('scope', S.CHANGE_ME);
  });
}

module.exports = scopeAttrValidHandler;
