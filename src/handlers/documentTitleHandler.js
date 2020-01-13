/**
 * @param {array} violationNodes the violation node list
 * @param {object} dom the dom
 */
function documentTitleHandler(
  violationNodes,
  dom,
) {
  violationNodes.map((node) => {
    const head = dom.window.document.head;
    let title = head.getElementsByTagName('title')[0];
    if (title === undefined) {
      title = dom.window.document.createElement('title');
      head.appendChild(title);
    }
    title.innerHTML = 'CHANGE_ME';
  });
}

module.exports = documentTitleHandler;
