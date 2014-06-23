// This file was automatically generated from CLTTemplates.soy.
// Please don't edit this file by hand.

goog.provide('CLT.Templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
CLT.Templates.main = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml(opt_data.str) + '</p>';
};
