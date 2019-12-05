const replaceAltHandler = require('./replaceAltHandler');
const stripAriaHiddenHandler = require('./stripAriaHiddenHandler');
const ariaRoleDescriptionHandler = require('./ariaRoleDescriptionHandler');
const ariaValidAttrHandler = require('./ariaValidAttrHandler');
const stripElementHandler = require('./stripElementHandler');
const replaceTitleHandler = require('./replaceTitleHandler');
const replaceLangHandler = require('./replaceLangHandler');
const listHandler = require('./listHandler');
const listItemHandler = require('./listItemHandler');
const tabIndexHandler = require('./tabIndexHandler');


exports.HANDLER_MAP = {
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
exports.AXE_RULES = Object.keys(exports.HANDLER_MAP).map((id) => ({id: id, enabled: true}));
