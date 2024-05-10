let deg = 0;
let intervalId = null;

window.onload = function(){
    const secondHand = document.getElementById('second-hand');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    function rotateSecondHand() {
        deg += 6;
        secondHand.style.transform = `rotate(${deg}deg)`;
    }

    function start(){
        stop();
        intervalId = setInterval(rotateSecondHand,1000);
    }

    function stop(){
        clearInterval(intervalId);
    }

    function reset(){
        stop();
        deg = 0;
        secondHand.style.transform = `rotate(${deg}deg)`;
    }

    startBtn.addEventListener('click',start);
    stopBtn.addEventListener('click',stop);
    resetBtn.addEventListener('click',reset);
}