// Initialize an array of objects
var myArr = [

    
    {
      studentName: "Rahul",
      studentClass: 12,
      studentSection: "A"
    },
    {
      studentName: "Sahil",
      studentClass: 10,
      studentSection: "A"
    },
    {
      studentName: "Shivam",
      studentClass: 11,
      studentSection: "A"
    },
    {
      studentName: "Roshan",
      studentClass: 12,
      studentSection: "A"
    },
  ];

  // Function to display results
  function displayResult(result) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = result;
  }

  // Array push()
  function arrayPush() {
    myArr.push({
      studentName: "NewStudent",
      studentClass: 9,
      studentSection: "B"
    });
    var result = "Array push() - After Push: " + jsonmyArr;
    displayResult(result);
  }

  // Array pop()
  function arrayPop() {
    var poppedStudent = myArr.pop();
    var result = "Array pop() - Removed Student: " + JSON.stringify(poppedStudent) + "<br>Array after pop(): " + JSON.stringify(myArr);
    displayResult(result);
  }

  // Array length
  function arrayLength() {
    var result = "Array length: " + myArr.length;
    displayResult(result);
  }

  // Array shift()
  function arrayShift() {
    var shiftedStudent = myArr.shift();
    var result = "Array shift() - Removed Student: " + JSON.stringify(shiftedStudent) + "<br>Array after shift(): " + JSON.stringify(myArr);
    displayResult(result);
  }