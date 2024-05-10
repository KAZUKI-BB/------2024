function convertColor(){
    const input = document.getElementById('colorInput').value.trim();
    const result = document.getElementById('result');

    if(isValidHex(input)){
        result.textContent = `RGB: ${hexToRGB(input)}`
    }else if(isValidRGB(input)){
        result.textContent = `HEX: ${rgbToHex(input)}`
    }else{
        result.textContent = 'エラー'
    }
}

function isValidHex(hex){
    return /^#?([a-f\d]{3}){1,2}$/i.test(hex);
}

function hexToRGB(hex){
    let r=0, g=0, b=0;
    hex = hex.replace(/^#/,'');

    if(hex.length === 3){
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    }else if (hex.length === 6){
        r = parseInt(hex.substring(0,2),16)
        g = parseInt(hex.substring(2,4),16)
        b = parseInt(hex.substring(4,6),16)
    }
    return `rgb(${r},${g},${b})`;
}

function isValidRGB(rgb){
    return /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i.test(rgb);
}

function rgbToHex(rgb){
    const [r,g,b] = rgb.match(/\d+/g).map(Number);
    return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}