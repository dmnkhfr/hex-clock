// Funktionsaufruf
$(document).ready(function() {
  clockInit();
})

//Funktionen
function clockInit() {
  setTime();
  setHex();
  loadingBar();
  spanWidth();
  setInterval(function() {
    setTime();
    setHex();
    loadingBar();
    spanWidth();
  }, 1000);
}

function setTime() {
  var time = new Date();
  var timeString = formatTime(time, 'y');
  $('.clock').html(timeString);
};

function setHex() {
  var time = new Date();
  var hexString = formatTime(time, 'n');
  var hexString = '#' + hexString;
  $('body').css("color", hexString);
  $('.loading-bar').css("background", hexString);
  $('.hex, .hex-inverted').html(hexString);
}

function loadingBar() {
  var time = new Date();
  var length = time.getMinutes() * 100 / 60;
  var length = length + '%';
  $('.loading-bar').css("width", length);
}

function spanWidth() {
  var width = $('.hex').width();
  var margin = width / 2;
  margin = '-' + margin + 'px';
  $('.hex, .hex-inverted').css('marginLeft', margin);
}

function formatTime(time, seperator) {
    var t = new Date(time),
        hours = '' + (t.getHours()),
        minutes = '' + t.getMinutes(),
        seconds = t.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    if(seperator == 'y') {
      return [hours, minutes, seconds].join(':');
    } else {
      return [hours, minutes, seconds].join('');
    }
}
