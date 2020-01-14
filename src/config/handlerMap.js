const ariaInputFieldLabelHandler = require('../handlers/ariaInputFieldLabelHandler');
const ariaRequiredAttrHandler = require('../handlers/ariaRequiredAttrHandler');
const ariaRoleDescriptionHandler = require('../handlers/ariaRoleDescriptionHandler');
const ariaRolesHandler = require('../handlers/ariaRolesHandler');
const ariaToggleFieldNameHandler = require('../handlers/ariaToggleFieldNameHandler');
const ariaValidAttrHandler = require('../handlers/ariaValidAttrHandler');
const ariaValidAttrValueHandler = require('../handlers/ariaValidAttrValueHandler');
const captionHandler = require('../handlers/captionHandler');
const descriptionHandler = require('../handlers/descriptionHandler');
const documentTitleHandler = require('../handlers/documentTitleHandler');
const duplicateIdHandler = require('../handlers/duplicateIdHandler');
const formFieldMultipleLabelsHandler = require('../handlers/formFieldMultipleLabelsHandler');
const langXmlMismatchHandler = require('../handlers/langXmlMismatchHandler');
const listHandler = require('../handlers/listHandler');
const listItemHandler = require('../handlers/listitemHandler');
const pageHasHeadingOneHandler = require('../handlers/pageHasHeadingOneHandler');
const replaceAccessKeyHandler = require('../handlers/replaceAccessKeyHandler');
const replaceAltHandler = require('../handlers/replaceAltHandler');
const replaceLangHandler = require('../handlers/replaceLangHandler');
const replaceTitleHandler = require('../handlers/replaceTitleHandler');
const stripAriaHiddenHandler = require('../handlers/stripAriaHiddenHandler');
const stripElementHandler = require('../handlers/stripElementHandler');
const tabIndexHandler = require('../handlers/tabindexHandler');
const inputLabelHandler = require('../handlers/inputLabelHandler');
const imageRedundantAltHandler = require('../handlers/imageRedundantAltHandler');
const frameTitleUniqueHandler = require('../handlers/frameTitleUniqueHandler');
const dlItemHandler = require('../handlers/dlItemHandler');

exports.HANDLER_MAP = {
  'dlitem': dlItemHandler,
  'frame-title-unique': frameTitleUniqueHandler,
  'image-redundant-alt': imageRedundantAltHandler,
  'label': inputLabelHandler,
  'accesskeys': replaceAccessKeyHandler,
  'area-alt': replaceAltHandler,
  'aria-hidden-body': stripAriaHiddenHandler,
  'aria-hidden-focus': stripAriaHiddenHandler,
  'aria-input-field-name': ariaInputFieldLabelHandler,
  'aria-required-attr': ariaRequiredAttrHandler,
  'aria-roledescription': ariaRoleDescriptionHandler,
  'aria-roles': ariaRolesHandler,
  'aria-toggle-field-name': ariaToggleFieldNameHandler,
  'aria-valid-attr': ariaValidAttrHandler,
  'aria-valid-attr-value': ariaValidAttrValueHandler,
  'audio-caption': captionHandler,
  'blink': stripElementHandler,
  'document-title': documentTitleHandler,
  'duplicate-id': duplicateIdHandler,
  'duplicate-id-active': duplicateIdHandler,
  'duplicate-id-aria': duplicateIdHandler,
  'form-field-multiple-labels': formFieldMultipleLabelsHandler,
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
  'page-has-heading-one': pageHasHeadingOneHandler,
  'role-img-alt': replaceTitleHandler,
  'tabindex': tabIndexHandler,
  'valid-lang': replaceLangHandler,
  'video-caption': captionHandler,
  'video-description': descriptionHandler,
};
exports.AXE_RULES = Object.keys(exports.HANDLER_MAP).map((id) => ({id: id, enabled: true}));
