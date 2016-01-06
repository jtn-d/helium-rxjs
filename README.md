# helium-rxjs

Element wrapper for [RxJS](https://github.com/Reactive-Extensions/RxJS)

```html
<helium-rxjs-observable
  subscription="{{subscription}}"
  last-data="{{results}}"
  on-next="onNext"
  on-error="onError"
  on-completed="onCompleted">
  <helium-rxjs-from-event event-name="keyup">
    <input type="text" placeholder="search" autofocus/>
  </helium-rxjs-from-event>
  <helium-rxjs-map selector="(function(e) {return e.target.value;})"></helium-rxjs-map>
  <helium-rxjs-filter predicate="(value) => value.length > 2"></helium-rxjs-filter>
  <helium-rxjs-debounce due-time="500"></helium-rxjs-debounce>
  <helium-rxjs-distinct-until-changed></helium-rxjs-distinct-until-changed>
  <helium-rxjs-flat-map-latest selector="{{search}}">
    <helium-rxjs-dom-jsonp-request 
      url="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${value}&callback=JSONPCallback">
    </helium-rxjs-dom-jsonp-request>
  </helium-rxjs-flat-map-latest>
  <helium-rxjs-map selector="(data) => data.response[2]"></helium-rxjs-map>      
</helium-rxjs-observable>
```

## Running Element

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/helium-rxjs/`, where `helium-rxjs` is the name of the directory containing it.

## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/helium-rxjs/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.