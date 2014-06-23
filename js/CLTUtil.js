goog.provide('CLT.Util');

goog.require('goog.Disposable');
goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventWrapper');
goog.require('goog.string');



/**
 * @constructor
 * @extends {goog.Disposable}
 * @param {?} args
 */
CLT.Util = function(args) {
  this.init.call(this);
};
goog.inherits(CLT.Util, goog.Disposable);


/**
 * 主処理
 */
CLT.Util.prototype.init = function() {};


/**
 * 文字列整形
 * @param {Object | string | number | null | undefined} param .
 * @return {string} str .
 */
CLT.Util.prototype.assertString = function(param) {
  var str = (goog.isDefAndNotNull(param)) ?
      goog.asserts.assertString(param) : '';
  return str;
};


/**
 * 数値整形
 * @param {Object | string | number | null | undefined} param .
 * @return {number | null} num .
 */
CLT.Util.prototype.assertNumber = function(param) {
  var num;
  if (goog.isDefAndNotNull(param)) {
    var tmp = parseInt(param, 10);
    num = (isNaN(tmp)) ? null : goog.asserts.assertNumber(tmp);
  } else {
    num = null;
  }
  return num;
};

/**
 * 文字列切るぞの処理
 * @param {number} num .
 * @param {Element} elm .
 */
CLT.Util.prototype.domStrProcessing = function(num, elm) {
  while (num < elm.offsetHeight) {
    elm.innerHTML =
        goog.string.truncate(
            elm.innerHTML,
            elm.innerHTML.length - 1,
            false);
  }
};

