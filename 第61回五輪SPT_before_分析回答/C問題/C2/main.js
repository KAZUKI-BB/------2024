let spotlightSize = 100;

const spotlight = document.getElementById('spotlight');
const container = document.querySelector('.image-container');

container.addEventListener('mousemove',function(e){
    spotlight.style.top = e.pageY - spotlightSize / 2 + 'px';
    spotlight.style.left = e.pageX - spotlightSize / 2 + 'px';
})

container.addEventListener('wheel',function(e){
    e.preventDefault();

    if(e.deltaY < 0){
        spotlightSize += 10;
    }else if(spotlightSize > 10){
        spotlightSize -=10;
    }

    spotlight.style.width = spotlightSize + 'px'
    spotlight.style.height = spotlightSize + 'px'
})