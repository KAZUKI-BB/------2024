const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function drawRandomBubble() {
    const radius = 20;  // 固定半径
    // 画面端から半径分の距離を保つための座標計算
    const x = radius + Math.random() * (canvas.width - 2 * radius);
    const y = radius + Math.random() * (canvas.height - 2 * radius);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
}

function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア
    for (let i = 0; i < 10; i++) {
        drawRandomBubble();
    }
}

drawBubbles();

