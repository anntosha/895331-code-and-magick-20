'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var GAP_BAR = 40;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 50;
var BAR_HEIGHT = 150;
var hooray = 'Ура вы победили!';
var results = 'Список результатов:';


// Функция отрисовки облака и тени
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция отрисовки текста
var renderText = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(hooray, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText(results, CLOUD_X + GAP, CLOUD_Y + GAP * 2);
};

// Находим максимальные результаты
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Функция показа статистики
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var heightBar = (BAR_HEIGHT * times[i]) / maxTime;
    var selfColorBar = 'rgba(255, 0, 0, 1.0)';
    var colorBar = 'rgba(0, 0, 255, ' + Math.random() + ')';

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, BAR_HEIGHT - heightBar + CLOUD_Y + TEXT_HEIGHT * 2);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT);

    if (players[i] === 'Вы') {
      colorBar = selfColorBar;
    }
    ctx.fillStyle = colorBar;
    ctx.fillRect(CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i, BAR_HEIGHT - heightBar + CLOUD_Y + TEXT_HEIGHT + CLOUD_Y + GAP * 2, BAR_WIDTH, heightBar);
  }
};
