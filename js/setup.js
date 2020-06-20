'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('.fireball-color');
  var coatInput = document.querySelector('.coat-color');
  var eyesInput = document.querySelector('.eyes-color');

  var onPopupEscPress = function (evt) {
    if (userNameInput.matches(':focus') && evt.key === 'Escape') {
      userDialog.classList.remove('hidden');
    } else if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  window.colorize.colorize(wizardCoat, window.colorize.WIZARD_COAT_COLOR, coatInput);
  window.colorize.colorize(wizardEyes, window.colorize.WIZARD_EYES_COLOR, eyesInput);
  window.colorize.colorize(fireball, window.colorize.FIREBALL_COLOR, fireballInput);

  window.validation();

  window.wizard();

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
