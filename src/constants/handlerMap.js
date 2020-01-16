const accesskeysHandler = require('../handlers/accesskeysHandler');
const ariaAllowedRoleHandler = require('../handlers/ariaAllowedRoleHandler');
const ariaInputFieldNameHandler = require('../handlers/ariaInputFieldNameHandler');
const ariaRequiredAttrHandler = require('../handlers/ariaRequiredAttrHandler');
const ariaRequiredChildrenHandler = require('../handlers/ariaRequiredChildrenHandler');
const ariaRoledescriptionHandler = require('../handlers/ariaRoledescriptionHandler');
const ariaRolesHandler = require('../handlers/ariaRolesHandler');
const ariaToggleFieldNameHandler = require('../handlers/ariaToggleFieldNameHandler');
const ariaValidAttrHandler = require('../handlers/ariaValidAttrHandler');
const ariaValidAttrValueHandler = require('../handlers/ariaValidAttrValueHandler');
const avoidInlineSpacingHandler = require('../handlers/avoidInlineSpacingHandler');
const definitionListHandler = require('../handlers/definitionListHandler');
const dlitemHandler = require('../handlers/dlitemHandler');
const documentTitleHandler = require('../handlers/documentTitleHandler');
const emptyHeadingHandler = require('../handlers/emptyHeadingHandler');
const frameTitleUniqueHandler = require('../handlers/frameTitleUniqueHandler');
const gAriaLabelHandler = require('../handlers/gAriaLabelHandler');
const gButtonNameHandler = require('../handlers/gButtonNameHandler');
const gDuplicateIdHandler = require('../handlers/gDuplicateIdHandler');
const gLandmarkIsTopLevel = require('../handlers/gLandmarkIsTopLevel');
const gReplaceAltHandler = require('../handlers/gReplaceAltHandler');
const gReplaceLangHandler = require('../handlers/gReplaceLangHandler');
const gReplaceTitleHandler = require('../handlers/gReplaceTitleHandler');
const gStripAriaHiddenHandler = require('../handlers/gStripAriaHiddenHandler');
const metaRefreshHandler = require('../handlers/metaRefreshHandler');
const htmlXmlLangMismatchHandler = require('../handlers/htmlXmlLangMismatchHandler');
const imageRedundantAltHandler = require('../handlers/imageRedundantAltHandler');
const labelHandler = require('../handlers/labelHandler');
const landmarkNoDuplicateBannerHandler = require('../handlers/landmarkNoDuplicateBannerHandler');
const landmarkNoDuplicateContentinfoHandler = require('../handlers/landmarkNoDuplicateContentinfoHandler');
const landmarkOneMainHandler = require('../handlers/landmarkOneMainHandler');
const landmarkUniqueHandler = require('../handlers/landmarkUniqueHandler');
const listHandler = require('../handlers/listHandler');
const listItemHandler = require('../handlers/listitemHandler');
const metaViewportHandler = require('../handlers/metaViewportHandler');
const pageHasHeadingOneHandler = require('../handlers/pageHasHeadingOneHandler');
const scopeAttrValidHandler = require('../handlers/scopeAttrValidHandler');
const tabindexHandler = require('../handlers/tabindexHandler');
const tableDuplicateNameHandler = require('../handlers/tableDuplicateNameHandler');
const gReplaceWithDivHandler = require('../handlers/gReplaceWithDivHandler');


exports.HANDLER_MAP = {
  'accesskeys': accesskeysHandler,
  'area-alt': gReplaceAltHandler,
  'aria-allowed-role': ariaAllowedRoleHandler,
  'aria-hidden-body': gStripAriaHiddenHandler,
  'aria-hidden-focus': gStripAriaHiddenHandler,
  'aria-input-field-name': ariaInputFieldNameHandler,
  'aria-required-attr': ariaRequiredAttrHandler,
  'aria-required-children': ariaRequiredChildrenHandler,
  'aria-roledescription': ariaRoledescriptionHandler,
  'aria-roles': ariaRolesHandler,
  'aria-toggle-field-name': ariaToggleFieldNameHandler,
  'aria-valid-attr': ariaValidAttrHandler,
  'aria-valid-attr-value': ariaValidAttrValueHandler,
  'avoid-inline-spacing': avoidInlineSpacingHandler,
  'blink': gReplaceWithDivHandler,
  'button-name': gButtonNameHandler,
  'definition-list': definitionListHandler,
  'dlitem': dlitemHandler,
  'document-title': documentTitleHandler,
  'duplicate-id': gDuplicateIdHandler,
  'duplicate-id-active': gDuplicateIdHandler,
  'duplicate-id-aria': gDuplicateIdHandler,
  'empty-heading': emptyHeadingHandler,
  'frame-title': gReplaceTitleHandler,
  'frame-title-unique': frameTitleUniqueHandler,
  'html-has-lang': gReplaceLangHandler,
  'html-lang-valid': gReplaceLangHandler,
  'html-xml-lang-mismatch': htmlXmlLangMismatchHandler,
  'image-alt': gReplaceAltHandler,
  'image-redundant-alt': imageRedundantAltHandler,
  'input-button-name': gButtonNameHandler,
  'input-image-alt': gReplaceAltHandler,
  'label': labelHandler,
  'label-title-only': labelHandler,
  'landmark-banner-is-top-level': gLandmarkIsTopLevel,
  'landmark-complementary-is-top-level': gLandmarkIsTopLevel,
  'landmark-contentinfo-is-top-level': gLandmarkIsTopLevel,
  'landmark-main-is-top-level': gLandmarkIsTopLevel,
  'landmark-no-duplicate-banner': landmarkNoDuplicateBannerHandler,
  'landmark-no-duplicate-contentinfo': landmarkNoDuplicateContentinfoHandler,
  'landmark-one-main': landmarkOneMainHandler,
  'landmark-unique': landmarkUniqueHandler,
  'list': listHandler,
  'listitem': listItemHandler,
  'marquee': gReplaceWithDivHandler,
  'meta-refresh': metaRefreshHandler,
  'meta-viewport': metaViewportHandler,
  'meta-viewport-large': metaViewportHandler,
  'object-alt': gAriaLabelHandler,
  'page-has-heading-one': pageHasHeadingOneHandler,
  'role-img-alt': gAriaLabelHandler,
  'scope-attr-valid': scopeAttrValidHandler,
  'tabindex': tabindexHandler,
  'table-duplicate-name': tableDuplicateNameHandler,
  'valid-lang': gReplaceLangHandler,
};

exports.AXE_RULES = Object.keys(exports.HANDLER_MAP).map((id) => ({id: id, enabled: true}));
