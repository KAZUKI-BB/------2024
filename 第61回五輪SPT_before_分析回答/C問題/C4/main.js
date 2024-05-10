const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let painting = false;
let currentColor = 'black';

document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        currentColor = this.dataset.color;
    });
});

canvas.addEventListener('mousedown', () => painting = true);
canvas.addEventListener('mouseup', () => painting = false);
canvas.addEventListener('mouseleave', () => painting = false);
canvas.addEventListener('mousemove', function(e) {
    if (!painting) return;
    const x = e.offsetX;
    const y = e.offsetY;
    ctx.fillStyle = currentColor;
    ctx.fillRect(x, y, 5, 5);
});

document.getElementById('saveJPG').addEventListener('click', function() {
    const dataURL = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.download = 'drawing.jpg';
    link.href = dataURL;
    link.click();
});

document.getElementById('savePNG').addEventListener('click', function() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = dataURL;
    link.click();
});
