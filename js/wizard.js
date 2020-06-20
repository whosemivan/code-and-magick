'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
    'Юлия', 'Люпита', 'Вашингтон'
  ];

  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
    'Топольницкая', 'Нионго', 'Ирвинг'
  ];
  var WIZARDS_NUMBER = 4;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var CreateWizard = function (wizardNames, wizardSurnames, coatColor, eyesColor) {
    this.name = wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' + wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)];
    this.coatColor = coatColor[Math.floor(Math.random() * coatColor.length)];
    this.eyesColor = eyesColor[Math.floor(Math.random() * eyesColor.length)];
  };

  var wizards = [];

  for (var j = 0; j < WIZARDS_NUMBER; j++) {
    wizards.push(new CreateWizard(WIZARD_NAMES, WIZARD_SURNAMES, window.colorize.WIZARD_COAT_COLOR, window.colorize.WIZARD_EYES_COLOR));
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  window.wizard = function () {
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
})();
