'use strict';

var CLOUD_WIDTH = 420; //ширина облака
var CLOUD_HEIGHT = 270; //высота облака
var CLOUD_POSITION_X = 100; //горизонтальная координата облака
var CLOUD_POSITION_Y = 10; //вертикальная координата облака
var STEP = 10; //смещение тени относительно координат облака
var FONT_STEP = 15; //расстояние между строк
var HISTOGRAM_HEIGHT = 150; //высота гистограммы
var BAR_WIDTH = 40; //ширина столбика
var BAR_STEP = 50; //расстояние между столбиками

//Функция отрисовки облака
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

window.renderStatistics = function(ctx, names, times) {

  renderCloud(ctx, CLOUD_POSITION_X + STEP, CLOUD_POSITION_Y + STEP, 'rgba(0, 0, 0, .7)');

  renderCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_POSITION_X + STEP, CLOUD_POSITION_Y + STEP * 1.5);
  ctx.fillText('Список результатов:', CLOUD_POSITION_X + STEP, CLOUD_POSITION_Y + STEP * 1.5 + FONT_STEP);


  ctx.fillText('Вы', CLOUD_POSITION_X + BAR_STEP, 260);
  ctx.fillRect(CLOUD_POSITION_X + BAR_STEP, HISTOGRAM_HEIGHT - 30, BAR_WIDTH, 120);

  ctx.fillText('Иван', CLOUD_POSITION_X + BAR_STEP + (BAR_WIDTH + BAR_STEP), 260);
  ctx.fillRect(CLOUD_POSITION_X + BAR_STEP + (BAR_WIDTH + BAR_STEP), HISTOGRAM_HEIGHT - 30, BAR_WIDTH, 120);

  ctx.fillText('Юлия', CLOUD_POSITION_X + BAR_STEP + (BAR_WIDTH + BAR_STEP)*2, 260);
  ctx.fillRect(CLOUD_POSITION_X + BAR_STEP + (BAR_WIDTH + BAR_STEP)*2, HISTOGRAM_HEIGHT - 30, BAR_WIDTH, 120);

  ctx.fillText('Роман', CLOUD_POSITION_X + BAR_STEP + (BAR_WIDTH + BAR_STEP)*3, 260);
  ctx.fillRect(CLOUD_POSITION_X + BAR_STEP + (BAR_WIDTH + BAR_STEP)*3, HISTOGRAM_HEIGHT - 30, BAR_WIDTH, 120);
};
