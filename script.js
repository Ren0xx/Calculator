function add(a, b) {
    return parseInt(a) + parseInt(b);
  };
  
function subtract (a, b) {
    return parseInt(a) - parseInt(b);
};
  
function multiply (a, b) {
    return parseInt(a) * parseInt(b);
};
  
function divide (a, b) {
    if (b == 0){
        return 'Don\'t divide by zero';
    }
    else {
        return parseInt(a) / parseInt(b);
    
    };
}
function modulo (a, b) {
    return parseInt(a) % parseInt(b);
}
function operate (num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'X':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return modulo(num1, num2);
    }
}
function getNumber(button) {
    const howManyDigits = display.textContent.trim().length;
    if (!isNaN(button.id)){
        if (isNaN(display.textContent) || display.textContent === '0') {
            display.textContent = '';
        }
    else if (howManyDigits < 16){
        display.textContent += button.id;
        }
        
    }
}
function getOperator(button) {
    if (isNaN(button.id) && button.id === '/' || button.id === 'X' || button.id === '-' || button.id === '+' || button.id === '%'){
        buttonDecimal.disabled = false;
        if (display.textContent !== ''){
            stored_value = display.textContent.trim();
        }
        display.textContent = '';
        operator = button.id;            
    }
}
function getResult(button) {
    if (button.id === '='){
        let result = operate(stored_value, display.textContent, operator).toPrecision(10);
        display.textContent = result;
        
    }
}
function addClass(button){
    if (isNaN(button.id) && button.id !== ',' && button.id !== '+'){
        button.classList.add('buttonsNumeric');   
}
}
const symbols = ['%','CE', 'C', '←', '7','8','9','/',
                '4', '5', '6','X', '1', '2', '3','-',
                '0',',','+', '='];
const container = document.querySelector('.container');
const buttons = container.querySelector('.buttons');
const display = container.querySelector('.display');

let stored_value = 0;
let operator = '';

//creating all buttons
for (let i = 0; i < 20; i++) {
    const div = document.createElement('button');
    div.className = 'button';
    div.setAttribute('id',`${symbols[i]}`);
    div.textContent = symbols[i];
    buttons.appendChild(div);        
}
//clearing display
const clearButton = document.querySelector('#C');
clearButton.addEventListener('click', () => {
    display.textContent = '';
})

const allButtons = container.querySelectorAll('button');
allButtons.forEach(button => {
    addClass(button);
    button.addEventListener('click', () => {
        getNumber(button);
        getOperator(button);
        getResult(button);
    })
})
const buttonDecimal = document.getElementById(',');
buttonDecimal.addEventListener('click', () =>{
    display.textContent += '.';
    buttonDecimal.disabled = true;
})

const backspaceButton = document.getElementById('←');
backspaceButton.addEventListener('click', () =>{
    if (display.textContent !== '') {
        display.textContent = display.textContent.slice(0, -1);
    }
})
const clearEverythingButton = document.getElementById('CE')
clearEverythingButton.addEventListener('click', () =>{
    display.textContent = '';
    stored_value = 0;
})
