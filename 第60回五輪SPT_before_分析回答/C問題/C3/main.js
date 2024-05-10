window.onload = function(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    let painting = false;
    let color = 'black';

    function startDraw(e){
        painting = true;
        draw(e);
    }

    function endDraw(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function changeColor(newColor){
        color = newColor;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);

    document.getElementById('red').addEventListener('click',function(){
        changeColor('red')
    });

    document.getElementById('blue').addEventListener('click',function(){
        changeColor('blue')
    });

    document.getElementById('green').addEventListener('click',function(){
        changeColor('green')
    });
}