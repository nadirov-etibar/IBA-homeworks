let sliderImg = document.getElementsByClassName("image-to-show");
let pause = document.getElementById("stop");
let resume = document.getElementById("resume");
let secondSpan = document.getElementById("second");
let milliSecondSpan = document.getElementById("millisecond");
let slideInterval = setInterval(switchSlide, 10000);
let countSecond = setInterval(countDownSecond, 1000);
let countMilliSecond = setInterval(countDownMilliSecond, 1);
let i = 0;
let second = 10;
let milliSecond = 99;

function switchSlide() {
    sliderImg[i].className = 'image-to-show';
    i = (i + 1) % sliderImg.length;
    sliderImg[i].className = 'image-to-show active';
}


function countDownSecond() {
    if (second <= 10 && second > 1) {
        second--;
    } else if (second == 1) {
        second = 10;
    }

    if (second == 10) {
        secondSpan.innerHTML = second + ".";
    }
    else {

        secondSpan.innerHTML = "0" + second + ".";
    }
}

function countDownMilliSecond() {
    if (milliSecond <= 99 && milliSecond >1){
        milliSecond --;
    }

    else if (milliSecond == 1){
        milliSecond = 99;
    }

    if (milliSecond < 10){
        milliSecondSpan.innerHTML = "0" + milliSecond;
    }
    else{
        milliSecondSpan.innerHTML = milliSecond;
    }
};


pause.onclick = function () {
    clearInterval(slideInterval);
    clearInterval(countSecond);
    clearInterval(countMilliSecond)
};

resume.onclick = function () {
    slideInterval = setInterval(switchSlide, 10000);
    countSecond = setInterval(countDownSecond, 1000);
    countMilliSecond = setInterval(countDownMilliSecond, 1);
    second = 10;
    milliSecond = 99;
    secondSpan.innerHTML = second +".";
    milliSecondSpan.innerHTML = milliSecond;
};

