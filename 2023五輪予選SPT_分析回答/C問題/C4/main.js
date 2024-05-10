document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('fizzBuzzResults');
    for (let i = 1; i <= 100; i++) {
        let result = '';

        if (i % 3 === 0 && i % 5 === 0) {
            result = 'FizzBuzz';
        } else if (i % 3 === 0) {
            result = 'Fizz';
        } else if (i % 5 === 0) {
            result = 'Buzz';
        } else {
            result = i;
        }
        const para = document.createElement('p');
        para.textContent = result;
        output.appendChild(para);
    }
});
