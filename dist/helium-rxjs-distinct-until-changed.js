'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var DistinctUntilChanged = (function () {
    function DistinctUntilChanged() {
      _classCallCheck(this, DistinctUntilChanged);
    }

    _createClass(DistinctUntilChanged, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-distinct-until-changed';

        this.properties = {};
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        return observable.distinctUntilChanged();
      }
    }]);

    return DistinctUntilChanged;
  })();

  Polymer(DistinctUntilChanged);
})();