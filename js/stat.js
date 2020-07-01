'use strict';

(function () {
  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10
  };
  var GAP = 10;
  var BAR_GAP = 50;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_Y_GAP = 230;
  var TEXT_GAP = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, Cloud.X + GAP, Cloud.Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, Cloud.X, Cloud.Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', Cloud.X + GAP, Cloud.Y + GAP + GAP);
    ctx.fillText('Список результатов:', Cloud.X + GAP, Cloud.Y + TEXT_GAP);

    var maxTime = window.utils.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%' + ', 50%)';
      }

      ctx.fillRect(Cloud.X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, Cloud.Y + BAR_Y_GAP, BAR_WIDTH, -(BAR_MAX_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], Cloud.X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, Cloud.Y + BAR_Y_GAP + GAP);
      ctx.fillText(Math.round(times[i]), Cloud.X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, Cloud.Y + BAR_MAX_HEIGHT + (-(BAR_MAX_HEIGHT * times[i]) / maxTime) + TEXT_GAP + GAP + GAP);
    }
  };
})();
