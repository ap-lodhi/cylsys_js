  // Initialize an example array
  let myArray = [1, 2, 3, 4, 5];

  // Function to display results
  function displayResult(result) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = result;
  }

  // Array length
  function arrayLength() {
    let result = "Array length: " + myArray.length;
    displayResult(result);
  }

  // // Array toString()
  function arrayToString() {
    let result = "Array toString(): " + myArray.toString();
    displayResult(result);
  }

  // Array pop()
  function arrayPop() {
    let poppedElement = myArray.pop();
    let result = "Array pop() - Removed Element: " + poppedElement + "<br>Array after pop(): " + myArray;
    displayResult(result);
  }
  // Array ()
  function arrayPush() {
    let pushedElement = myArray.push(6);
    let result = "Array push() - Added Element: " + pushedElement + "<br>Array after push(): " + myArray;
    displayResult(result);
  }

 // Array shift()
 function arrayShift() {
    let shiftedElement = myArray.shift();
    let result = "Array shift() - Removed Element: " + shiftedElement + "<br>Array after shift(): " + myArray;
    displayResult(result);
  }

  // Array unshift()
  function arrayUnshift() {
    myArray.unshift(0);
    let result = "Array unshift(0) - After Unshift: " + myArray;
    displayResult(result);
  }