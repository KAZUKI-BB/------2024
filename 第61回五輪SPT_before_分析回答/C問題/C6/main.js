const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('click', () => {
    cursor.style.transform = 'scale(2)';  // クリック時にサイズを増加
    setTimeout(() => {
        cursor.style.transform = 'scale(1)';  // 元のサイズに戻す
    }, 200);  // 200ミリ秒後に実行
});
