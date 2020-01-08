const ariaInputFieldLabelHandler = require('../handlers/ariaInputFieldLabelHandler');
const ariaRoleDescriptionHandler = require('../handlers/ariaRoleDescriptionHandler');
const ariaValidAttrHandler = require('../handlers/ariaValidAttrHandler');
const langXmlMismatchHandler = require('../handlers/langXmlMismatchHandler');
const listHandler = require('../handlers/listHandler');
const listItemHandler = require('../handlers/listitemHandler');
const replaceAccessKeyHandler = require('../handlers/replaceAccessKeyHandler');
const replaceAltHandler = require('../handlers/replaceAltHandler');
const replaceLangHandler = require('../handlers/replaceLangHandler');
const replaceTitleHandler = require('../handlers/replaceTitleHandler');
const stripAriaHiddenHandler = require('../handlers/stripAriaHiddenHandler');
const stripElementHandler = require('../handlers/stripElementHandler');
const tabIndexHandler = require('../handlers/tabindexHandler');
const ariaRequiredAttrHandler = require('../handlers/ariaRequiredAttrHandler');
const ariaRolesHandler = require('../handlers/ariaRolesHandler');
const ariaToggleFieldNameHandler = require('../handlers/ariaToggleFieldNameHandler');
const ariaValidAttrValueHandler = require('../handlers/ariaValidAttrValueHandler');

exports.HANDLER_MAP = {
  'aria-valid-attr-value': ariaValidAttrValueHandler,
  'aria-toggle-field-name': ariaToggleFieldNameHandler,
  'aria-roles': ariaRolesHandler,
  'aria-required-attr': ariaRequiredAttrHandler,
  'accesskeys': replaceAccessKeyHandler,
  'area-alt': replaceAltHandler,
  'aria-hidden-body': stripAriaHiddenHandler,
  'aria-hidden-focus': stripAriaHiddenHandler,
  'aria-input-field-name': ariaInputFieldLabelHandler,
  'aria-roledescription': ariaRoleDescriptionHandler,
  'aria-valid-attr': ariaValidAttrHandler,
  'blink': stripElementHandler,
  'frame-title': replaceTitleHandler,
  'html-has-lang': replaceLangHandler,
  'html-lang-valid': replaceLangHandler,
  'html-xml-lang-mismatch': langXmlMismatchHandler,
  'image-alt': replaceAltHandler,
  'input-image-alt': replaceAltHandler,
  'list': listHandler,
  'listitem': listItemHandler,
  'marquee': stripElementHandler,
  'meta-refresh': stripElementHandler,
  'object-alt': replaceTitleHandler,
  'role-img-alt': replaceTitleHandler,
  'tabindex': tabIndexHandler,
  'valid-lang': replaceLangHandler,
};
exports.AXE_RULES = Object.keys(exports.HANDLER_MAP).map((id) => ({id: id, enabled: true}));
