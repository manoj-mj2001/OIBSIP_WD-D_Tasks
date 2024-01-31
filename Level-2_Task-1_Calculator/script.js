let currentDisplay = '0';
let resultDisplay = false;
const clicksound = new Audio('./ClickSound.mpeg');
function appendToDisplay(value) {
  if (currentDisplay === '0' || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  resultDisplay = false;
  clicksound.play();
  updateDisplay();
}

function updateDisplay() {
  clicksound.play();
  const displayElement = document.getElementById('display');
  displayElement.textContent = currentDisplay;
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);
    currentDisplay += '\n =' + result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay += '\nError';
    updateDisplay();
  }

  resultDisplay = true;
}

function clearLastElement() {
  currentDisplay = currentDisplay.slice(0, -1);
  if (currentDisplay === '') {
    currentDisplay = '0';
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = '0';
  updateDisplay();
}
window.addEventListener('resize', handleOverflow);
handleOverflow();
