'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var DomAjax = (function () {
    function DomAjax() {
      _classCallCheck(this, DomAjax);
    }

    _createClass(DomAjax, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-dom-ajax';

        this.properties = {
          url: {
            type: String,
            value: null
          },
          responseType: {
            type: String,
            value: 'json'
          }
        };
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        return Rx.DOM.ajax({ url: this.url, responseType: this.responseType });
      }
    }, {
      key: '_selector',
      value: function _selector(value) {
        var url = eval('`' + decodeURIComponent(this.url) + '`');
        return Rx.DOM.ajax({ url: url, responseType: this.responseType });
      }
    }]);

    return DomAjax;
  })();

  Polymer(DomAjax);
})();