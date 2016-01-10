'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var Debounce = (function () {
    function Debounce() {
      _classCallCheck(this, Debounce);
    }

    _createClass(Debounce, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-debounce';

        this.properties = {
          dueTime: {
            type: Number,
            value: 0,
            notify: true,
            observer: 'dueTimeChanged'
          }
        };
      }
    }, {
      key: 'dueTimeChanged',
      value: function dueTimeChanged(e) {
        // https://github.com/Polymer/polymer/issues/2815
        this.fire('due-time-changed', e);
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        return observable.debounce(this.dueTime);
      }
    }]);

    return Debounce;
  })();

  Polymer(Debounce);
})();