/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function captionHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const element = node.element;
    const track = dom.window.document.createElement('track');
    track.setAttribute('src', 'CHANGE_ME');
    track.setAttribute('kind', 'captions');
    track.setAttribute('srclang', 'CHANGE_ME');
    track.setAttribute('label', 'CHANGE_ME');
    element.appendChild(track);
  });
}

module.exports = captionHandler;
