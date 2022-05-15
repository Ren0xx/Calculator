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
        default:
            return 'Something went wrong, try again';
    }
}

// function clearDisplay() {}
const symbols = ['%','CE', 'C', '←', '7','8','9','/',
                '4', '5', '6','X', '1', '2', '3','-',
                '0',',','+', '='];
                
                
const container = document.querySelector('.container');
const buttons = container.querySelector('.buttons');

const display = container.querySelector('.display');
let stored_value = 0;
let operator = '';

for (let i = 0; i < 20; i++) {
    const div = document.createElement('button');
    div.className = 'button';
    div.setAttribute('id',`${symbols[i]}`);
    div.textContent = symbols[i];
    buttons.appendChild(div);        
}
//clearing display
const clear_button = document.querySelector('#C');
clear_button.addEventListener('click', () => {
    display.textContent = '';
})

const clickedButtons = container.querySelectorAll('button');

clickedButtons.forEach(button => {
    button.addEventListener('click', () => {
        //number
        getNumber(button);
        getOperator(button);
        getResult(button);
        //operator
        
       
    })
})

function getNumber(button) {
    if (!isNaN(button.id)){
        if (isNaN(display.textContent)){
            display.textContent = '';
        }
        display.textContent += button.id;
    }
}
function getOperator(button) {
    if (isNaN(button.id) && button.id !== 'C' && button.id !== '='){
        const color = '80%';
        button.style.filter = `brightness(${color})`;
        stored_value = display.textContent.trim();
        display.textContent = '';
        operator = button.id;            
        }
}
function getResult(button) {
    if (button.id === '='){
        const operatorButton = document.getElementById(operator);
        const color = '100%';
        operatorButton.style.filter = `brightness(${color})`;
        let result = operate(stored_value, display.textContent.trim(), operator)
        display.textContent = result;
    }
}
