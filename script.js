function add(a, b) {
    return a + b;
  };
  
function subtract (a, b) {
      return a - b;
};
  
function multiply (a, b) {
    return a * b;
};
  
function divide (a, b) {
    if (b === 0){
        throw 'Don\'t divide by zero';
    }
    try {
        return a / b;    
    } catch (e) {
        console.error(e);
    }
    
};

function operate (num1, num2, operator) {
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return 'Sorry, something went wrong, try again';
    }
}
const symbols = ['%','CE', 'C', '←', '7','8','9','/',
                '4', '5', '6','X', '1', '2', '3','-',
                '0','.','+', '='];
                
                
const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');

for (let i = 0; i < 20; i++) {
    const div = document.createElement('button');
    div.className = 'button';
    div.setAttribute('id',`${symbols[i]}`);
    div.textContent = symbols[i];
    buttons.appendChild(div);    
    
}

const display = document.querySelector('.display');
display.textContent = 'display';
