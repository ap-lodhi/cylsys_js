function MyObject() {
    // Store a reference to the outer 'this' context in 'that'
    const that = this;
  
    this.data = "Hello, World!";
  
    // Define a method that uses 'that' to access the outer context
    this.displayData = function() {
      console.log(that.data);
    };
  
    // Simulate an asynchronous operation with a callback
    setTimeout(function() {
      // Inside the callback, 'this' would refer to the global context
      // 'that' allows us to access the 'data' property of the outer context
      that.displayData();
    }, 5000);
  }
  
  const obj = new MyObject();
  obj.displayData(); // Outputs: "Hello, World!" (called synchronously)

  




  