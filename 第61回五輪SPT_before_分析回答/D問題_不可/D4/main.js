function removeDigits(){
    const inputText = document.getElementById('inputText').value;
    const resultText = inputText.replace(/[0-9]/g,'');

    document.getElementById('resultText').value = resultText;
}