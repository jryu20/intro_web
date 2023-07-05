let timeoutID = null;
window.onload = print;

const play_again = document.getElementsByTagName('input')[0];
const start_update = document.getElementsByTagName('input')[1];
const stop_update = document.getElementsByTagName('input')[2];

play_again.addEventListener('click', function() {
  window.location.assign("welcome.php");
});

start_update.addEventListener('click', function() {
  force_print();
});

stop_update.addEventListener('click', function() {
  stop_printing();
})

function print() {
  timeoutID = setTimeout(print, 8000);

  const text = document.getElementById('text');

  const request = new XMLHttpRequest();
  request.open('GET', 'scores.txt?v=' + Math.random());
  request.send();

  request.onload = function() {
    if (this.status === 200) {
      text.innerHTML = this.responseText.split('\n').join('<br>');
    }
  };
  
}

function stop_printing() {
  clearTimeout(timeoutID);
}

function force_print() {
  stop_printing();
  print();
}