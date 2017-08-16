"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  /**
   * dialog component
   * @attribute {string} title - An example attribute
   * @attribute {string} subject - An example attribute
   */
  var dialog = function (_HTMLElement) {
    _inherits(dialog, _HTMLElement);

    function dialog(self) {
      var _this2, _ret;

      _classCallCheck(this, dialog);

      self = (_this2 = _possibleConstructorReturn(this, (dialog.__proto__ || Object.getPrototypeOf(dialog)).call(this, self)), _this2);
      return _ret = self, _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(dialog, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this._render();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        //this._render();
      }
    }, {
      key: "_render",
      value: function _render() {
        var header = this.getAttribute("title") || "";
        var content = this.getAttribute("subject") || "";
        var _this = this;
        var main_div = document.createElement("div");
        main_div.setAttribute("class", "mod");
        main_div.id = "myModal1";
        var div = document.createElement("div");
        div.style.textAlign = "center";
        div.setAttribute("class", "mod-cont1");
        var title = document.createElement("h4");
        title.align = "left";
        title.innerHTML = header;
        title.style.lineHeight = "0";
        title.style.padding = "3px";
        title.id = "dialog_title";
        var span = document.createElement("span");
        span.style.float = "right";
        span.innerHTML = "&times;";
        span.style.lineHeight = "0";
        span.setAttribute("class", "close");
        span.onclick = function () {
          //main_div.style.display = "none"
          _this.parentNode.removeChild(_this);
        };
        title.appendChild(span);
        var hr = document.createElement("hr");
        hr.setAttribute("class", "hr");
        hr.style.color = "black";
        var subject = document.createElement("h5");
        subject.style.padding = "3px";
        var hr1 = document.createElement("hr");
        hr.setAttribute("class", "hr");
        hr1.style.color = "black";
        subject.innerHTML = '<h5>' + content + '</h5>';
        var button = document.createElement("button");
        var dialogX = this.width / 2;
        div.style.width = "260px";
        div.style.height = "200px";

        div.style.borderRadius = "10px";

        div.style.margin = "100px auto";

        //div.style.background="grey";
        button.style.background = "";

        button.innerHTML = "OK";
        button.style.width = "60px";
        button.setAttribute("class", "btn_center");

        button.style.height = "23px";
        button.style.lineHeight = "0";
        button.style.margin = "auto";

        button.onclick = function () {
          cti.store.variables.flag = 0;
          _this.parentNode.removeChild(_this);
          //main_div.style.display = "none"
          // $store.variables.submit_form = false;
          if (subject.innerText != "Registration failed" && subject.innerText != "Profile update failed" && subject.innerText != "Logging failed") {
            cti.utils.callAction("go-to-page", { "name": "Home" });
          }
        };
        div.appendChild(title);
        div.appendChild(hr);
        div.appendChild(subject);
        div.appendChild(hr1);
        div.appendChild(button);
        main_div.appendChild(div);
        this.appendChild(main_div);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["title", "subject"];
      }
    }]);

    return dialog;
  }(HTMLElement);

  customElements.define('cti-dialog', dialog);
})();