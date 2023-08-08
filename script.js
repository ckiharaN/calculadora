let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLastChar() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function appendCharacter(char) {
    if (displayValue === '0') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();
