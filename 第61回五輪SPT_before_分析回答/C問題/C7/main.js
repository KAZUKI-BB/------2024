const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
let posX = 0;  // 初期のX座標位置
const radius = 20;  // 円の半径
const speed = 2;  // 移動速度

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // キャンバスをクリア
    ctx.beginPath();
    ctx.arc(posX, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    posX += speed;  // X座標を更新
    if (posX - radius > canvas.width) {
        posX = -radius;  // キャンバスの右端を超えたら左端に戻す
    }
    requestAnimationFrame(draw);  // 次のフレームを要求
}

draw();  // アニメーションの開始
