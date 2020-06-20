'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;
  var userNameInput = document.querySelector('.setup-user-name');

  window.validation = function () {
    userNameInput.addEventListener('input', function () {
      var valueLength = userNameInput.value.length;

      if (valueLength < MIN_NAME_LENGTH) {
        userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
      } else if (valueLength > MAX_NAME_LENGTH) {
        userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
      } else {
        userNameInput.setCustomValidity('');
      }
    });
  };
})();
