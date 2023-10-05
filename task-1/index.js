

// this  function will gieve the  value  a+b 

function add() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);

  var ans = a + b;

  document.getElementById("ans").innerText = `the value of A+b = ${ans}`;
}

function sub() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);

  var ans = a - b;

  document.getElementById("ans").innerText = `the value of A-b = ${ans}`;
}

function mul() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);

  var ans = a * b;

  document.getElementById("ans").innerText = `the value of A*b = ${ans}`;
}

function divide() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);

  var ans = a / b;

  document.getElementById("ans").innerText = `the value of A/b = ${ans}`;
}
