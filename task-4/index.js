  // Equality Operators
  let equalResult = 5 == '5';
  document.getElementById('equalOutput').textContent = equalResult;

  let strictEqualResult = 5 === '5';
  document.getElementById('strictEqualOutput').textContent = strictEqualResult;

  let notEqualResult = 5 != 10;
  document.getElementById('notEqualOutput').textContent = notEqualResult;

  let strictNotEqualResult = 5 !== '5';
  document.getElementById('strictNotEqualOutput').textContent = strictNotEqualResult;

  // Comparison Operators
  let greaterThanResult = 10 > 5;
  document.getElementById('greaterThanOutput').textContent = greaterThanResult;

  let lessThanResult = 5 < 10;
  document.getElementById('lessThanOutput').textContent = lessThanResult;

  let greaterThanOrEqualResult = 5 >= 5;
  document.getElementById('greaterThanOrEqualOutput').textContent = greaterThanOrEqualResult;

  let lessThanOrEqualResult = 10 <= 5;
  document.getElementById('lessThanOrEqualOutput').textContent = lessThanOrEqualResult;

  // Ternary Operator
  let age = 16;
  let ternaryResult = age < 18 ? 'Minor' : 'Adult';
  document.getElementById('ternaryOutput').textContent = ternaryResult;