window.onload = function(){
    const square = document.getElementById('square');

    window.onmousemove = function(event){
        let x = event.clientX;
        let y = event.clientY;

        square.style.left = `${x - square.offsetWidth / 2}px`;
        square.style.top = `${y - square.offsetHeight / 2}px`;
    }
}