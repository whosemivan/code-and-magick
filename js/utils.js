'use strict';

(function () {
  window.utils = {
    getRandomElement: function (arrName) {
      return arrName[Math.floor(Math.random() * arrName.length)];
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    }
  };
})();
