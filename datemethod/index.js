function displayResult(result) {
    let output = document.getElementById('output');
    output.innerHTML = result;
  }

  function getYear() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    displayResult("Year: " + year);
  }
  function fullDate() {
    let currentDate = new Date();
  //   let year = currentDate.getFullYear();
    displayResult("Year: " + currentDate);
  }

  function getMonth() {
    let currentDate = new Date();
    let month = currentDate.getMonth(); // Returns 0-11
    displayResult("Month: " + month);
  }

  function getDate() {
    let currentDate = new Date();
    let date = currentDate.getDate(); // Returns 1-31
    displayResult("Date: " + date);
  }

  function getDay() {
    let currentDate = new Date();
    let day = currentDate.getDay(); // Returns 0-6 (Sunday to Saturday)
    displayResult("Day: " + day);
  }

  function getHours() {
    let currentDate = new Date();
    let hours = currentDate.getHours(); // Returns 0-23
    displayResult("Hours: " + hours);
  }

  function getMinutes() {
    let currentDate = new Date();
    let minutes = currentDate.getMinutes(); // Returns 0-59
    displayResult("Minutes: " + minutes);
  }

  function getSeconds() {
    let currentDate = new Date();
    let seconds = currentDate.getSeconds(); // Returns 0-59
    displayResult("Seconds: " + seconds);
  }

  function getMilliseconds() {
    let currentDate = new Date();
    let milliseconds = currentDate.getMilliseconds(); // Returns 0-999
    displayResult("Milliseconds: " + milliseconds);
  }