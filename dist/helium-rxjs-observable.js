'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var Observable = (function () {
    function Observable() {
      _classCallCheck(this, Observable);
    }

    _createClass(Observable, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-observable';

        this.properties = {
          disposable: {
            type: Object,
            value: null,
            readonly: true,
            notify: true
          },

          auto: {
            type: Boolean,
            value: false
          },

          lastData: {
            type: Object,
            value: null,
            readonly: true,
            notify: true
          },

          lastError: {
            type: Object,
            value: null,
            readonly: true,
            notify: true
          }
        };
      }
    }, {
      key: 'attached',
      value: function attached() {
        var _this = this;

        this.async(function () {
          _this.getContentChildren('#operators').forEach(function (op) {
            _this.observable = op._create(_this.observable);
          });

          if (_this.auto) {
            _this.subscribe();
          }
        });
      }
    }, {
      key: 'subscribe',
      value: function subscribe() {
        var _this2 = this;

        if (this.observable) {
          this.disposable = this.observable.subscribe(function (data) {
            _this2.lastData = data;
            _this2.fire('next', { data: data });
          }, function (error) {
            _this2.lastError = error;
            _this2.fire('error', { error: error });
          }, function () {
            _this2.fire('completed', {});
          });
          return this.disposable;
        }
        return null;
      }
    }]);

    return Observable;
  })();

  Polymer(Observable);
})();