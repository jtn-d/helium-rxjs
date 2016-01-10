'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var FlatMap = (function () {
    function FlatMap() {
      _classCallCheck(this, FlatMap);
    }

    _createClass(FlatMap, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-flat-map';

        this.properties = {
          selector: {
            type: Object,
            value: null
          }
        };
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        var children = this.getContentChildren('content');
        if (children.length === 1) {
          // take first child
          this.selector = children[0]._selector.bind(children[0]);
          return observable.flatMap(this.selector);
        } else if (children.length > 1) {
          console.warn('helium-rxjs-flat-map-latest can have only one child');
        } else {
          // no children
          if (typeof this.selector === 'function') {
            return observable.flatMap(this.selector);
          } else {
            return observable.flatMap(eval(this.selector));
          }
        }
      }
    }]);

    return FlatMap;
  })();

  Polymer(FlatMap);
})();