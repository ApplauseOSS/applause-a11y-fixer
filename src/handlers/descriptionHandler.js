/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function descriptionHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const track = dom.window.document.createElement('track');
    track.setAttribute('src', 'CHANGE_ME');
    track.setAttribute('kind', 'descriptions');
    track.setAttribute('srclang', 'CHANGE_ME');
    track.setAttribute('label', 'CHANGE_ME');
    element.appendChild(track);
  });
}

module.exports = descriptionHandler;
