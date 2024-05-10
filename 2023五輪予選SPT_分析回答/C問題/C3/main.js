document.addEventListener('mousemove', function(e) {
        const square = document.getElementById('square');
        square.style.left = e.clientX + 'px';
        square.style.top = e.clientY + 'px';
    });
