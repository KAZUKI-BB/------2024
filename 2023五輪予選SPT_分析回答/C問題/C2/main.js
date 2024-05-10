function addRow() {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = '<input type="number" class="number-input" onchange="calculateAverage()">';
    cell2.innerHTML = '<button onclick="removeRow(this)">削除</button>';
    calculateAverage(); // 新しい行が追加されるたびに平均を更新
}

function removeRow(button) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    if (table.rows.length > 1) {
        table.deleteRow(button.parentElement.parentElement.rowIndex - 1);
        calculateAverage(); // 行が削除されるたびに平均を更新
    }
}

function calculateAverage() {
    const numbers = document.querySelectorAll('.number-input');
    let total = 0, count = 0;
    numbers.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
            count++;
        }
    });
    const average = count > 0 ? (total / count).toFixed(2) : 0;
    document.getElementById('averageDisplay').textContent = average;
}

// 初期ロード時に平均を計算
document.addEventListener('DOMContentLoaded', () => {
    calculateAverage();
});
