document.getElementById('toggleMode').addEventListener('click', () => {
    const body = document.body;
    const content = document.getElementById('content');
    const currentBackgroundColor = window.getComputedStyle(body).backgroundColor;

    if (currentBackgroundColor === 'rgb(0, 0, 0)') {
        body.style.backgroundColor = '#FFF';
        body.style.color = '#000';
        content.textContent = 'ライトモードテスト';
    } else {
        body.style.backgroundColor = '#000';
        body.style.color = '#FFF';
        content.textContent = 'ナイトモードテスト';
    }
});

