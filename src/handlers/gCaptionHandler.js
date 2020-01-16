const {S} = require('../constants/constants');

/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom The JSDOM dom object
 */
function gCaptionHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const track = dom.window.document.createElement('track');
    track.setAttribute('src', S.CHANGE_ME);
    track.setAttribute('kind', 'captions');
    track.setAttribute('srclang', S.CHANGE_ME);
    track.setAttribute('label', S.CHANGE_ME);
    element.appendChild(track);
  });
}

module.exports = gCaptionHandler;
