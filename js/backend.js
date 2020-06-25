'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;
  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      var URL = 'https://javascript.pages.academy/code-and-magick/data';
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open('GET', URL);

      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      var URL = 'https://javascript.pages.academy/code-and-magick';
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
