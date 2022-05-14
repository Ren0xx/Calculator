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
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'X':
            return multiply(num1, num2);
        case '/':
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
let display_value = 0;

//clearing display
const clear_button = document.querySelector('#C');
clear_button.addEventListener('click', () => {
    const display = document.querySelector('.display');
    display.textContent = '';
})

const value_buttons = container.querySelectorAll('button');
value_buttons.forEach(button => {
     if (!isNaN(button.textContent)){
         button.addEventListener('click', () => {
            display.textContent += button.textContent;
         })
     }
     else if(isNaN(button.textContent) && button.textContent !== 'C'){
         button.addEventListener('click', () => {
            display_value = display.textContent;
            let operator = button.textContent;
            console.log(operator);
            display.textContent = operator;
         })
        

        
     }
    
});

