/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function audioCaptionHandler(
  violationNodes,
  dom,
) {
  violationNodes.forEach((node) => {
    const element = node.element;
    const track = dom.window.document.createElement('track');
    element.insertAdjacentElement('beforeend', track);
  });
}

module.exports = audioCaptionHandler;
