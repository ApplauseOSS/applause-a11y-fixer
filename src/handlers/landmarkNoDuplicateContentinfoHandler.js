const {SelectorType} = require('../constants/constants');
const {landmarkNoDuplicate} = require('../utils/handlerUtils');

/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function landmarkNoDuplicateContentinfoHandler(
  violationNodes,
  dom,
) {
  landmarkNoDuplicate(violationNodes, SelectorType.ANY );
}

module.exports = landmarkNoDuplicateContentinfoHandler;
