function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  var number = n++;
  return n;
}

function dec(n) {
  var number = n--;
  return n;
}


function makeInt(n) {
  var n = parseInt(n, 10);
  return n;
}

function preserveDecimal(n) {
  return parseFloat(n);
}
