'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var FromEvent = (function () {
    function FromEvent() {
      _classCallCheck(this, FromEvent);
    }

    _createClass(FromEvent, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'helium-rxjs-from-event';

        this.properties = {
          element: {
            type: Object,
            value: null,
            notify: true
          },
          eventName: {
            type: String,
            value: null,
            notify: true
          }
        };
      }
    }, {
      key: 'attached',
      value: function attached() {
        var elements = this.getContentChildren('content');
        if (elements.length === 1) {
          // take first elements
          this.element = elements[0];
        } else {
          console.warn('helium-rxjs-from-event can have only one child');
        }
      }
    }, {
      key: '_create',
      value: function _create(observable) {
        return Rx.Observable.fromEvent(this.element, this.eventName);
      }
    }]);

    return FromEvent;
  })();

  Polymer(FromEvent);
})();