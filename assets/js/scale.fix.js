var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}


var sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function init() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

init();
// ===========================================================
var sliderImagesMob = document.querySelectorAll('.slide--mob'),
    arrowLeftMob = document.querySelector('#arrow-left--mob'),
    arrowRightMob = document.querySelector('#arrow-right--mob'),
    currentMob = 0;

function resetMob() {
    for (let i = 0; i < sliderImagesMob.length; i++) {
        sliderImagesMob[i].style.display = 'none';
    }
}

function initMob() {
    resetMob();
    sliderImagesMob[0].style.display = 'block';
}

function slideLeftMob() {
    resetMob();
    sliderImagesMob[currentMob - 1].style.display = 'block';
    currentMob--;
}

arrowLeftMob.addEventListener('click', function () {
    if (currentMob === 0) {
        currentMob = sliderImagesMob.length;
    }
    slideLeftMob();
});

function slideRightMob() {
    resetMob();
    sliderImagesMob[currentMob + 1].style.display = 'block';
    currentMob++;
}

arrowRightMob.addEventListener('click', function () {
    if (currentMob === sliderImagesMob.length - 1) {
        currentMob = -1;
    }
    slideRightMob();
});

initMob();
