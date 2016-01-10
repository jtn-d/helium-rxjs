'use strict';

var app = document.querySelector('#app');

app.subscribe = function (e) {
  app.$.obs.subscribe();
};

app.onNext = function (e) {
  console.log(e.detail.data);
  //app.disposable.dispose();
};

app.onError = function (e) {
  console.log(e.detail);
};

app.onCompleted = function () {
  console.log('onCompleted');
};

app.search = function (query) {
  var url = 'https://api.github.com/users/octocat/repos';
  return Rx.DOM.ajax({ url: url, responseType: 'json' });
};