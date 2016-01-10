'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var Filter = (function () {
    function Filter() {
      _classCallCheck(this, Filter);
    }

    _createClass(Filter, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-filter';

        this.properties = {
          predicate: {
            type: Object,
            value: null
          }
        };
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        if (typeof this.selector === 'function') {
          return observable.filter(this.predicate);
        } else {
          return observable.filter(eval(this.predicate));
        }
      }
    }]);

    return Filter;
  })();

  Polymer(Filter);
})();