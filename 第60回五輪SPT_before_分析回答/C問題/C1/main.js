window.onload = function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let xPos = 0;
    const yPos = canvas.height / 2;
    const radius = 50;

    function drawCircle(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
        ctx.fillstyle = 'blue';
        ctx.fill();
    }

    function updateCircle(){
        xPos += 1;
        if(xPos - radius > canvas.width){
            xPos = radius;
        }
    }

    function render(){
        drawCircle();
        updateCircle();
        requestAnimationFrame(render);
    }

    render();
}