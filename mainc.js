//Access to the screen element through DOM
const screenElement = document.getElementById('screen');

//Appends the specified value to the existing value displayed on the calculator screen
function appendValue(value) {
  screenElement.value += value;
}

//Clears the results
function clearResult() {
  screenElement.value = '';
}

//Retrieves the current value from the calculator screen, converts it to a number using parseFloat(), and then negates it by multiplying it by -1
function togglePlusMinus() {
    let screen = document.getElementById('screen');
    let currentValue = parseFloat(screen.value);
    if (!isNaN(currentValue)) {
      screen.value = -currentValue;
    }
  }

//Performs mathemaical opeartion of n numbers entered in the input fields
function calculate() {
  const expression = screenElement.value;
    
  // Check if the expression contains the modulo (%) operator
  if (expression.includes('%')) {
    const parts = expression.split('%');
    if (parts.length === 2) {
      const dividend = parseFloat(parts[0]);
      const divisor = parseFloat(parts[1]);
      const result = dividend % divisor;
      screenElement.value = result;
      return;
    }
  }
  // Evaluate the expression if no modulo operator found
  const result = eval(expression);
  screenElement.value = result;
}