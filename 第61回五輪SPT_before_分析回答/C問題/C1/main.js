function highlightKeyword(){
    const keyword = document.getElementById('keyword').value;
    const textToSearch = document.getElementById('textToSearch').innerText;

    const highlightedKeyword = '<span style="background-color: '+ getRandomColor() +';">' + keyword + '</span>';

    const highlightedText = textToSearch.replace(new RegExp(keyword, 'g'), highlightedKeyword);

    document.getElementById('textToSearch').innerHTML = highlightedText;
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}