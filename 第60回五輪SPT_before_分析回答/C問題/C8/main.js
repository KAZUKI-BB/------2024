function changeColor(){
    let r = document.getElementById('r').value;
    let g = document.getElementById('g').value;
    let b = document.getElementById('b').value;

    document.getElementById('rVal').textContent = r;
    document.getElementById('gVal').textContent = g;
    document.getElementById('bVal').textContent = b;

    let rgbStr = "rgb("+ r + ","+ g +","+ b + ")";
    document.getElementById('result').style.backgroundColor = rgbStr;
    document.getElementById('rgbVal').textContent = rgbStr;
}