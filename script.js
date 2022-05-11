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

function operator (num1, num2, operator) {
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