const progressBar = document.querySelector('.card2__bar-full');
const numberLeft = document.querySelector('.card3__number').textContent;

let storageLeft = 1000 - numberLeft;
const storagePercent = storageLeft / 10;

progressBar.style.width = `${storagePercent}%`;

var i = 0;

const moveProgressBar = () => {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(delay, 15);
    function delay() {
      if (width >= storagePercent) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }
  }
};

moveProgressBar();
