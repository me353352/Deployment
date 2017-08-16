"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  /**
   * helpdesk component
   * @attribute {string} email - An example attribute
   * @attribute {string} phone - An example attribute
   */
  var helpdesk = function (_HTMLElement) {
    _inherits(helpdesk, _HTMLElement);

    function helpdesk(self) {
      var _this2, _ret;

      _classCallCheck(this, helpdesk);

      self = (_this2 = _possibleConstructorReturn(this, (helpdesk.__proto__ || Object.getPrototypeOf(helpdesk)).call(this, self)), _this2);
      return _ret = self, _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(helpdesk, [{
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

        var email = this.getAttribute("email") || "";
        var phone = this.getAttribute("phone") || "";
        var _this = this;
        var main_div = document.createElement("div");
        main_div.setAttribute("class", "mod");
        main_div.id = "myModal1";
        //main_div.setAttribute("id","myModal1")
        var div = document.createElement("div");
        div.style.textAlign = "center";
        div.setAttribute("class", "mod-cont1");
        var title = document.createElement("h4");
        title.align = "left";
        title.innerHTML = 'Contact Us';
        title.style.lineHeight = "0";
        title.style.padding = "3px";
        title.id = "dialog_title";
        var span = document.createElement("span");
        span.style.float = "right";
        span.innerHTML = "&times;";
        span.style.lineHeight = "0";
        span.setAttribute("class", "close");
        span.onclick = function () {
          //this.style.display = "none"

          _this.parentNode.removeChild(_this);
          //cti.store.pages.Log.switch_1 = true;
          var element = document.getElementById("switch_1").getElementsByTagName("span")[2];
          element.classList.remove("checked");
          document.getElementById("switch_1").getElementsByTagName("span")[4].classList.remove("ng-hide");
          document.getElementById("switch_1").getElementsByTagName("span")[1].classList.add("ng-hide");
        };
        title.appendChild(span);
        var hr = document.createElement("hr");
        hr.setAttribute("class", "hr");
        hr.style.color = "black";
        //var img = document.createElement("img")
        //img.setAttribute("class","img")
        // img.style.float = "right"
        var button = document.createElement("button");
        button.innerHTML = " <a class='anchor' href='mailto:'" + email + ">Send Mail</a>";
        button.style.width = "150px";
        button.setAttribute("class", "btn_center");
        button.style.height = "23px";
        button.style.margin = "auto";
        var span = document.createElement("span");
        span.innerHTML = '<h5>' + email + '</h5>';
        //button.appendChild(span)
        var br = document.createElement("br");
        var button1 = document.createElement("button");
        button1.innerHTML = " <a class='anchor' href='tel:'" + phone + ">Call now </a>";
        button1.style.width = "150px";
        button1.setAttribute("class", "btn_center");
        button1.style.height = "23px";
        button1.style.margin = "auto";
        var spanphone = document.createElement("span");
        spanphone.innerHTML = "<h5>" + phone + "</h5>";
        div.style.width = "260px";
        div.style.height = "210px";
        div.style.borderRadius = "10px";
        div.style.margin = "100px auto";

        div.appendChild(title);
        div.appendChild(hr);
        div.appendChild(span);
        div.appendChild(button);
        div.appendChild(br);
        div.appendChild(spanphone);
        div.appendChild(button1);
        main_div.appendChild(div);
        this.appendChild(main_div);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["email", "phone"];
      }
    }]);

    return helpdesk;
  }(HTMLElement);

  customElements.define('cti-helpdesk', helpdesk);
})();