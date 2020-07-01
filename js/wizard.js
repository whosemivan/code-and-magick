'use strict';

(function () {
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('.coat-color');
  var eyesInput = document.querySelector('.eyes-color');
  var fireballInput = document.querySelector('.fireball-color');


  wizardCoat.addEventListener('click', function () {
    var newColor = window.utils.getRandomElement(window.colorize.WIZARD_COAT_COLOR);
    coatInput.value = wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.utils.getRandomElement(window.colorize.WIZARD_EYES_COLOR);
    eyesInput.value = wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    var newColor = window.utils.getRandomElement(window.colorize.FIREBALL_COLOR);
    fireballInput.value = fireball.style.backgroundColor = newColor;
  });

  window.wizard = wizard;
})();
