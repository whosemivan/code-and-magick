'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
    'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
  ];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5',
    '#e6e848'
  ];

  var getRandomColor = function (arrName) {
    return arrName[Math.floor(Math.random() * arrName.length)];
  };

  window.colorize = {
    colorize: function (element, colors, elementValue) {
      element.addEventListener('click', function () {
        var color = getRandomColor(colors);
        if (element.tagName.toLowerCase() === 'div') {
          elementValue.value = element.style.backgroundColor = color;
        } else {
          elementValue.value = element.style.fill = color;
        }
      });
    },
    WIZARD_COAT_COLOR: WIZARD_COAT_COLOR,
    WIZARD_EYES_COLOR: WIZARD_EYES_COLOR,
    FIREBALL_COLOR: FIREBALL_COLOR
  };
})();
