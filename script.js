const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendFunction(func) {
  if (func === "sqrt") {
    display.value += "Math.sqrt(";
  } else if (func === "log") {
    display.value += "Math.log10(";
  } else if (func === "exp") {
    display.value += "Math.exp(";
  } else if (func === "pow") {
    display.value += "**";
  } else if (func === "pi") {
    display.value += "Math.PI";
  } else {
    display.value += `Math.${func}(`;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Evaluar la expresión con eval. Mejor usar funciones matemáticas ya insertadas.
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
