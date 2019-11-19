/* Dependencies */

const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');
const got = require('got');
const path = require('path');


/* Utility Function(s) */

/** Capitalize the specified `str[ing]`
 * @param {string} str the string
 * @return {string} the result
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


/** Create a new `[JS]DOM` instance for the specified `input`
 * @param {string} input the input
 * @return {object} the result
 */
function createDOM(input) {
  return new JSDOM(input, {includeNodeLocations: true});
}


/**
 * Find the opening tag for a specified element
 * @param {object} element the element
 * @return {string} the result
 */
function openingTag(element) {
  const outerHtml = element.outerHTML;

  let openingTagLength;
  if (outerHtml.match(new RegExp(`</${ element.tagName }>$`, 'i'))) {
    openingTagLength = outerHtml.length -
      element.innerHTML.length -
      (element.tagName.length + 3);
  } else {
    openingTagLength = outerHtml.length;
  }

  return outerHtml.slice(0, openingTagLength);
}


/**
 * Replace the value at the specified indices with the provided value
 * @param {string} str the string
 * @param {int} start the start index
 * @param {int} end the end index
 * @param {string} replacement the replacement
 * @return {string} the result
 */
function replaceAt(
    str,
    start,
    end,
    replacement,
) {
  return str.substring(0, start) +
    replacement +
    str.substring(end, str.length);
}


/* Violation Handler(s) */

/**
 * Update the "aria-roledescription" for the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function ariaRoleDescriptionHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.removeAttribute('aria-roledescription');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/**
 * Strip out _any_ invalid "aria" attributes for the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function ariaValidAttrHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  for (const invalidAttribute of violationNode['any'][0]['data']) {
    element.removeAttribute(invalidAttribute);
  }
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/**
 * Wraps the specified violation node value with a `li`
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function listHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['none'][0]['relatedNodes'][0].element;
  const location = dom.nodeLocation(element);
  return document.substring(0, location.startOffset) + '<li>' +
    document.substring(location.startOffset, location.endOffset) + '</li>' +
    document.substring(location.endOffset, document.length);
}


/**
 * Wraps the specified violation node value with a `ul`
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function listItemHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  return document.substring(0, location.startOffset) + '<ul>' +
    document.substring(location.startOffset, location.endOffset) + '</ul>' +
    document.substring(location.endOffset, document.length);
}


/**
 * Replaces the "alt" attribute of the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function replaceAltHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.setAttribute('alt', 'CHANGE_ME');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/**
 * Replaces the "lang" attribute of the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function replaceLangHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.setAttribute('lang', 'en');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/**
 * Replaces the "title" attribute of the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function replaceTitleHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.setAttribute('title', 'CHANGE_ME');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/**
 * Strips the "aria-hidden" attribute from the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function stripAriaHiddenHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.removeAttribute('aria-hidden');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/**
 * Strips the specified violation node from the dom
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function stripElementHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  return replaceAt(
      document,
      location.startOffset,
      location.endOffset,
      '',
  );
}


/**
 * Set the "tabindex" attribute for the specified violation node
 * @param {object} violationNode the violation node
 * @param {object} dom the dom
 * @param {string} document the document
 * @return {string} the result
 */
function tabIndexHandler(
    violationNode,
    dom,
    document,
) {
  const element = violationNode['element'];
  const location = dom.nodeLocation(element);
  element.setAttribute('tabindex', '0');
  return replaceAt(
      document,
      location.startTag.startOffset,
      location.startTag.endOffset,
      openingTag(element),
  );
}


/* Constant(s) */

const HANDLER_MAP = {
  'area-alt': replaceAltHandler,
  'aria-hidden-body': stripAriaHiddenHandler,
  'aria-hidden-focus': stripAriaHiddenHandler,
  'aria-roledescription': ariaRoleDescriptionHandler,
  'aria-valid-attr': ariaValidAttrHandler,
  'blink': stripElementHandler,
  'frame-title': replaceTitleHandler,
  'html-has-lang': replaceLangHandler,
  'html-lang-valid': replaceLangHandler,
  'image-alt': replaceAltHandler,
  'input-image-alt': replaceAltHandler,
  'list': listHandler,
  'listitem': listItemHandler,
  'marquee': stripElementHandler,
  'meta-refresh': stripElementHandler,
  'object-alt': replaceTitleHandler,
  'role-img-alt': replaceTitleHandler,
  'tabindex': tabIndexHandler,
};
const SCRIPT_NAME = path.basename(__filename);
const RULES = Object.keys(HANDLER_MAP).map((id) => ({id: id, enabled: true}));
const USAGE = `Usage: node ${SCRIPT_NAME} <path-or-url> [--fix] [<source-code-directory>]

<path-or-url>
    path to an HTML file or a URL to check for violations / fix (required)

--fix
    apply the applicable fixes and output the result (optional)

<source-code-directory>
    path to the source-directory (optional, though required for source-code fixes)\n`;


/* Action Helper(s) */

/** Format the specified violation for output
 * @param {object} violation the violation
 * @return {string} the result
 */
function formatViolation(violation) {
  const violationNodes = violation['nodes'];
  return `${violation['description'].replace('Ensures', 'Ensure')}:
  Impact: ${capitalize(violation['impact'])}
  Related HTML:
${formatViolationNodes(violationNodes)}
  Violations: ${violationNodes.length}`;
}


/** Format the specifed violation node for output
 * @param {object} violationNode the violation node
 * @return {string} the result
 */
function formatViolationNode(violationNode) {
  return `    - ${violationNode['html']}`;
}


/** Format the specifed violation nodes for output
 * @param {object} violationNodes the violation nodes
 * @return {string} the result
 */
function formatViolationNodes(violationNodes) {
  return violationNodes.map(formatViolationNode).join('\n');
}


/**
 * Apply the specified  [_axe_] `rule` against the specified `dom`
 * @param {object} dom the dom
 * @param {object} rule the rule
 * @return {object} the result
 */
async function applyRule(dom, rule) {
  return await applyRules(dom, [rule]);
}


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


/**
 * Attempts to fix a violation
 * @param {object} dom the dom
 * @param {string} document the document
 * @param {array} violation the violation
 * @return {string} the result
 */
async function fixViolation(
    dom,
    document,
    violation,
) {
  const handler = HANDLER_MAP[violation['id']];
  if (!handler) {
    return document;
  }

  const violationNodes = violation['nodes'];
  if (!violationNodes.length) {
    return document;
  }

  return violationNodes.reduce(
      (memo, violationNode) => (
        handler(
            violationNode,
            dom,
            memo,
        )
      ),
      document,
  );
}


/* Action Handler(s) */

/**
 * Fix violations for the specified input
 * @param {string} input the input
 * @return {string} the result
 */
async function fixViolations(input) {
  let document = input;
  for (const rule of Object.values(RULES)) {
    const dom = createDOM(document);

    const violations = (await applyRule(dom, rule))['violations'];
    if (!violations.length) {
      continue;
    }

    document = await fixViolation(
        dom,
        document,
        violations[0],
    );
  }

  return document;
}


/**
 * Report violations for the specified input
 * @param {string} input the input
 * @return {string} the result
 */
async function reportViolations(input) {
  const violations = (await applyRules(createDOM(input), RULES))['violations'];
  if (!violations.length) {
    return 'No violations found. Nice!\n';
  }

  return `${violations.map(formatViolation).join('\n\n')}\n`;
}


/* Application Entry-point */

(async () => {
  const args = process.argv.splice(2);

  if (process.stdin.isTTY) {
    if (!args.length || args.length > 3) {
      process.stdout.write(USAGE);
      process.exit(0);
    }

    const path = args[0];

    let input;
    if (path.match(/^http[s]?:\/\//)) {
      input = (await got(path)).body;
    } else {
      input = fs.readFileSync(path, 'utf8');
    }

    let output;
    if (args.length == 3) {
      throw new Error('Not Implemented!');
    } else if (args.length == 2 && args[1] === '--fix') {
      output = await fixViolations(input);
    } else {
      output = await reportViolations(input);
    }

    process.stdout.write(output);
  } else {
    if (args.length > 2) {
      process.stdout.write(USAGE);
      process.exit(0);
    }

    process.stdin.setEncoding('utf8');

    let input = '';
    process.stdin.on('readable', async () => {
      let chunk;
      while ((chunk = process.stdin.read()) !== null) {
        input += chunk;
      }
    });

    process.stdin.on('end', async () => {
      let output;
      if (args.length == 2) {
        throw new Error('Not Implemented!');
      } else if (args.length == 1 && args[0] === '--fix') {
        output = await fixViolations(input);
      } else {
        output = await reportViolations(input);
      }

      process.stdout.write(output);
    });
  }
})();
