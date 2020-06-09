'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var BAR_WITH = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
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
    var selfColorBar = 'rgba(255, 0, 0, 1.0)';
    var colorBar = 'rgba(0, 0, 255, ' + Math.random() + ')';
    debugger
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (BAR_WITH * times[i]) / maxTime, BAR_HEIGHT);
    if (players[i] === 'Вы') {
      colorBar = selfColorBar;
    }
    console.log(players[i]);
    console.log(colorBar);
    ctx.fillStyle = colorBar;
  }
};
