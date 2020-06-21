'use strict';

(function () {
  var NameLength = {
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 25
  };
  var userNameInput = document.querySelector('.setup-user-name');

  window.validation = function () {
    userNameInput.addEventListener('input', function () {
      var valueLength = userNameInput.value.length;

      if (valueLength < NameLength.MIN_NAME_LENGTH) {
        userNameInput.setCustomValidity('Ещё ' + (NameLength.MIN_NAME_LENGTH - valueLength) + ' симв.');
      } else if (valueLength > NameLength.MAX_NAME_LENGTH) {
        userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - NameLength.MIN_NAME_LENGTH) + ' симв.');
      } else {
        userNameInput.setCustomValidity('');
      }
    });
  };
})();
