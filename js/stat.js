var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var INDENTATION = 40;
var AXIS_TEXT_X = 120; //ось икс текст
var AXIS_TEXT_Y = 40;  //ось игрик текст
var STEP_TEXT = 30; //шаг
var SCHEDULE_WIDTH = 40; //ширина графика
var SCHEDULE_HEIGHT = 150; //высота графика
var SCHEDULE_X = 140; //координаты икс
var SCHEDULE_Y = 90; //координаты игрик
var NAME_Y = SCHEDULE_X + SCHEDULE_Y + STEP_TEXT;
var TIME_X = 140; //координаты икс время
var TIME_Y = 90; //координаты игрик время

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', AXIS_TEXT_X, AXIS_TEXT_Y);
  ctx.fillText('Cисок результатов:', AXIS_TEXT_X, AXIS_TEXT_Y + STEP_TEXT);

  var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(SCHEDULE_X, SCHEDULE_Y, SCHEDULE_WIDTH, SCHEDULE_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], SCHEDULE_X + (SCHEDULE_Y * i), (NAME_Y * times[i]) / maxTime);

    ctx.fillStyle = 'rgba(2, 14, 134)';
    ctx.fillRect(SCHEDULE_X + (SCHEDULE_Y * i), SCHEDULE_Y, SCHEDULE_WIDTH, SCHEDULE_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], SCHEDULE_X + (SCHEDULE_Y * i), (NAME_Y * times[i]) / maxTime);

    ctx.fillStyle = 'hsl(240, 5%, 63%)';
    ctx.fillRect(SCHEDULE_X + (SCHEDULE_Y * i), SCHEDULE_Y, SCHEDULE_WIDTH, SCHEDULE_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], SCHEDULE_X + (SCHEDULE_Y * i), (NAME_Y * times[i]) / maxTime);

    ctx.fillStyle = 'hsl(238, 20%, 50%)';
    ctx.fillRect(SCHEDULE_X + (SCHEDULE_Y * i), SCHEDULE_Y, SCHEDULE_WIDTH, SCHEDULE_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], SCHEDULE_X + (SCHEDULE_Y * i), (NAME_Y * times[i]) / maxTime);
  }

  var times = ['2725', '4025', '1244', '1339'];
  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(times[i], TIME_X + (TIME_Y * i), 90);

    ctx.fillStyle = '#000';
    ctx.fillText(times[i], TIME_X + (TIME_Y * i), 90);

    ctx.fillStyle = '#000';
    ctx.fillText(times[i], TIME_X + (TIME_Y * i), 90);

    ctx.fillStyle = '#000';
    ctx.fillText(times[i], TIME_X + (TIME_Y * i), 90);
  }
};
