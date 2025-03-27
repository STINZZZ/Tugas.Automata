function checkScientificNumber() {
    const input = document.getElementById('numberInput').value;
    const resultDisplay = document.getElementById('result');
    
    // Regular expression to check for scientific notation
    const scientificRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)$/;

    if (scientificRegex.test(input)) {
        resultDisplay.textContent = `"${input}" is a scientific number.`;
        resultDisplay.style.color = 'green';
    } else {
        resultDisplay.textContent = `"${input}" is not a scientific number.`;
        resultDisplay.style.color = 'red';
    }
}