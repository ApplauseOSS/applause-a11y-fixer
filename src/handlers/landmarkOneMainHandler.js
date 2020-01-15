const {SelectorType, T} = require('../constants/constants');
const {landmarkNoDuplicate} = require('../utils/handlerUtils');

/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function landmarkOneMainHandler(
  violationNodes,
  dom,
) {
  landmarkNoDuplicate(violationNodes, SelectorType.ALL, T.MAIN);
}

module.exports = landmarkOneMainHandler;
