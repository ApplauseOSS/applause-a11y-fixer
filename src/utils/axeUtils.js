// const logger = require('../logging/logger');

/**
 * Apply the specified  [_axe_] `rules` against the specified `dom`
 * @param {object} dom The JSDOM dom object
 * @param {array} rules the rules
 * @param {boolean} disableOtherRules
 * @return {object} the result
 */
async function applyRules(dom, rules, disableOtherRules = true) {
  // logger.info('Checking HTML for violations...');

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
  axe.configure({rules: rules, disableOtherRules: disableOtherRules});

  return await axe.run(global.document, {elementRef: true});
}

exports.applyRules = applyRules;
