window.onload = function () {
  var segundos = document.getElementById('segundos');
  var dezenas = document.getElementById('dezenas');
  var minutos = document.getElementById('minutos');
  const startButton = document.getElementById('button-start');
  const stopButton = document.getElementById('button-stop');
  const resetButton = document.getElementById('button-reset');
  var Interval;
  var s = 0;
  var d = 0;
  var m = 0;

  startButton.onclick = () => {
    Interval = setInterval(start, 10);
  };

  stopButton.onclick = () => {
    clearInterval(Interval);
  };

  resetButton.onclick = () => {
    clearInterval(Interval);
    s = 0;
    d = 0;
    m = 0;
    minutos.innerHTML = '00';
    segundos.innerHTML = '00';
    dezenas.innerHTML = '00';
  };

  function start() {
    d++;
    if (d <= 9) {
      dezenas.innerHTML = '0' + d;
    }

    if (d > 9) {
      dezenas.innerHTML = d;
    }

    if (d > 99) {
      s++;
      segundos.innerHTML = '0' + s;
      d = 0;
      dezenas.innerHTML = '0' + 0;
    }

    if (s > 9) {
      segundos.innerHTML = s;
    }

    if (s > 60) {
      m++;
      minutos.innerHTML = '0' + m;
      s = 0;
      segundos.innerHTML = '0' + 0;
    }

    if (m > 9) {
      minutos.innerHTML = m;
    }
  }
};
