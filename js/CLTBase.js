goog.provide('CLT.Base');

goog.require('CLT.Templates');
goog.require('CLT.Util');



/**
 * @constructor
 * @extends {CLT.Util}
 */
CLT.Base = function() {
  this.main.call(this);
};
goog.inherits(CLT.Base, CLT.Util);


CLT.Base.prototype.Str = 'Hello World!';


/**
 * 主処理
 */
CLT.Base.prototype.main = function() {
  var template =
    soy.renderAsElement(
        CLT.Templates.main,
        {str: this.Str}
    );

  var body = goog.dom.getDocument().body;
  if (goog.isDefAndNotNull(body)) {
    // ページの書き出しが完了していれば書き出す
    this.render(template);
  } else {

    // 書き出しが完了してなければイベントとして登録
    var render = goog.bind(
      this.render,
      this,
      template
    );

    goog.events.listen(
        window,
        goog.events.EventType.DOMCONTENTLOADED,
        render
    );
  }
};


/**
 * 広告書き出し処理
 * @param {Element} template .
 */
CLT.Base.prototype.render = function(template) {
  var body = goog.dom.getDocument().body;
  goog.dom.appendChild(body, template);
};

// goog.global['CLT'] = CLT.Base;
new CLT.Base();


