'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var Zip = (function () {
    function Zip() {
      _classCallCheck(this, Zip);
    }

    _createClass(Zip, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-zip';

        this.properties = {
          resultSelector: {
            type: Object,
            value: null
          }
        };
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        var children = this.getContentChildren('content');
        var obs = [];
        children.forEach(function (child) {
          obs.push(child._create());
        });

        if (obs.length > 1) {
          var resultSelector = null;
          if (this.resultSelector && typeof this.resultSelector !== 'function') {
            resultSelector = eval(this.resultSelector);
          } else {
            resultSelector = this.resultSelector;
          }
          if (observable) {
            if (resultSelector) {
              return observable.zip.apply(observable, obs.concat([resultSelector]));
            } else {
              return observable.zip.apply(observable, obs);
            }
          } else {
            if (resultSelector) {
              var _Rx$Observable;

              return (_Rx$Observable = Rx.Observable).zip.apply(_Rx$Observable, obs.concat([resultSelector]));
            } else {
              var _Rx$Observable2;

              return (_Rx$Observable2 = Rx.Observable).zip.apply(_Rx$Observable2, obs);
            }
          }
        } else {
          console.warn('helium-rxjs-zip should have at least two children');
        }
      }
    }]);

    return Zip;
  })();

  Polymer(Zip);
})();