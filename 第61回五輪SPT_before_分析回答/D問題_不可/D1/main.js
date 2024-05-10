document.addEventListener('DOMContentLoaded',function(){
    fetch('data/actual_answers.csv')
        .then(response => response.text())
        .then(actualData => {
            const actualAnswers = parseCSV(actualData);

            fetch('data/submitted_answers.csv')
             .then(response => response.text())
             .then(submittedData => {
                const submittedAnswers = parseCSV(submittedData);
                displayResults(actualAnswers,submittedAnswers);
             });
        });

    function parseCSV(csvData){
        const rows = csvData.trim().split('\n').slice(1);
        return rows.map(row => {
            const [id,answer] = row.split(',');
            return {id,answer};
        });
    }

    function displayResults(actualAnswers,submittedAnswers){
        const table = document.getElementById('resultsTable');
        let correctCount = 0;

        actualAnswers.forEach((actual, index) => {
            const submitted = submittedAnswers[index];
            if (actual.answer === submitted.answer){
                correctCount++;
            }

            const row = table.insertRow();
            row.insertCell().textContent = actual.id;
            row.insertCell().textContent = actual.answer;
            row.insertCell().textContent = submitted.answer;
        });

        const scoreDisplay = document.getElementById('scoreDisplay');
        scoreDisplay.textContent = `スコア: ${correctCount}/${actualAnswers.length}`;
    }
});