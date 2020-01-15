const {SelectorType, T} = require('../constants/constants');
const {landmarkNoDuplicate} = require('../utils/handlerUtils');

/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function landmarkNoDuplicateBannerHandler(
  violationNodes,
  dom,
) {
  landmarkNoDuplicate(violationNodes, SelectorType.ANY, T.HEADER);
}

module.exports = landmarkNoDuplicateBannerHandler;
