"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  /**
   * logout component
  
   */
  var logout = function (_HTMLElement) {
    _inherits(logout, _HTMLElement);

    function logout(self) {
      var _this2, _ret;

      _classCallCheck(this, logout);

      self = (_this2 = _possibleConstructorReturn(this, (logout.__proto__ || Object.getPrototypeOf(logout)).call(this, self)), _this2);
      return _ret = self, _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(logout, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this._render();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldVal, newVal) {
        // this._render();
      }
    }, {
      key: "_render",
      value: function _render() {
        var div = document.createElement("div");
        div.setAttribute("class", "dropdown");
        var _this = this;
        var subdiv = document.createElement("div");
        subdiv.id = "logout";
        // subdiv.innerHTML = "Logout"
        // subdiv.setAttribute("class","dropdown-content")
        /*  subdiv.onclick = function(){
           _this.parentNode.removeChild(_this) 
            cti.store.variables.isProfileSet = false
            cti.store.variables.profile = "undefined"
            cti.store.variables.updated_profile = "undefined"
             cti.utils.callAction("go-to-page", {"name": "Register"});
          }
          */
        var ul = document.createElement("ul");
        ul.style.listStyleType = "none";
        ul.id = "logout";
        ul.setAttribute("class", "dropdown-content");
        var profile = document.createElement("li");
        profile.innerHTML = "Profile";
        var logout = document.createElement("li");
        logout.innerHTML = "logout";
        logout.onclick = function () {
          _this.parentNode.removeChild(_this);
          cti.store.variables.isProfileSet = false;
          cti.store.variables.profile = "undefined";
          cti.store.variables.updated_profile = "undefined";
          cti.utils.callAction("go-to-page", { "name": "Register" });
          /* cti.store.pages.Register.name = ""
           cti.store.pages.Register.phone_number = ""
           cti.store.pages.Register.mobile_number = ""
           cti.store.pages.Register.email = ""
           cti.store.pages.Register.location_address = ""
           cti.store.pages.Register.cost_center = ""
           */
        };
        ul.appendChild(profile);
        ul.appendChild(logout);
        div.appendChild(ul);

        // div.appendChild(subdiv)
        this.appendChild(div);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["foo"];
      }
    }]);

    return logout;
  }(HTMLElement);

  customElements.define('cti-logout', logout);
})();