/**
 * Apply the specified  [_axe_] `rules` against the specified `dom`
 * @param {object} dom the dom
 * @param {array} rules the rules
 * @return {object} the result
 */
async function applyRules(dom, rules) {
  // See: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#required-globals
  global.document = dom.window.document;
  global.window = dom.window;

  // Needed by `axe` -- lib/core/public/run.js
  global.Node = dom.window.Node;
  global.NodeList = dom.window.NodeList;

  // Needed by `axe` -- lib/core/base/context.js
  global.Document = dom.window.Document;
  global.Element = dom.window.Element;

  // Needed by `axios` -- lib/helpers/isURLSameOrigin.js
  global.navigator = dom.window.navigator;

  // _This_ needs to be loaded lazily and re-configured w/ each iteration
  const axe = require('axe-core');
  axe.configure({rules: rules, disableOtherRules: true});

  return await axe.run(global.document, {elementRef: true});
}

exports.applyRules = applyRules;
