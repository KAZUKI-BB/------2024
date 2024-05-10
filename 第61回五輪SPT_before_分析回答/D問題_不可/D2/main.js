window.onload = function(){
    const params = new URLSearchParams(window.location.search);
    const date1 = params.get('date1');
    const date2 = params.get('date2');

    if (date1 && date2){
        const d1 = new Date(date1);
        const d2 = new Date(date2);

        const diffTime = Math.abs(d2 - d1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById('result').textContent = `${diffDays}日`;
    }else{
        document.getElementById('result').textContent = '日付を正しく入力してください';
    }
}