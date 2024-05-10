function loadFile(event){
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            document.getElementById('fileContent').value = e.target.result;
        };
        reader.readAsText(file);
    }
}

function saveFile(){
    const text = document.getElementById('fileContent').value;
    const blob = new Blob([text],{type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = 'saveFile.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}