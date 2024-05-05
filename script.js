function calculate() {
    let input = document.querySelector('.result').value;
    let result;
    try {
        result = eval(input);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid input');
        }
    } catch (error) {
        result = 'Error';
    }
    document.querySelector('.result').value = result;
}

document.querySelectorAll('.btn-calculator').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.result').value += button.value;
    });
});