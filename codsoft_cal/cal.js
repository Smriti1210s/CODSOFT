function Value(val) {
  const display = document.getElementById('display');

  if (val === '√') {
    try {
      display.value = Math.sqrt(eval(display.value));
    } catch {
      display.value = 'Error';
    }
  }

  // Percentage
  else if (val === '%') {
    try {
      display.value = eval(display.value) / 100;
    } catch {
      display.value = 'Error';
    }
  }

  // Normal input
  else {
    display.value += val;
  }
}

// Clear button function
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Calculate (=) function
function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}



