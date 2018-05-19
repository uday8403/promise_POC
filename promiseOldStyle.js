

function doSomethingOldStyle(successCallback, failureCallback) {
    console.log("It is done.");
    // Succeed half of the time.
    var number=Math.random();
    console.log(number);
    if (number > .5) {
      successCallback("SUCCESS")
    } else {
      failureCallback("FAILURE")
    }
  };
  
  function successCallback(result) {
    console.log("It succeeded with " + result);
  }
  
  function failureCallback(error) {
    console.log("It failed with " + error);
  }
  
  doSomethingOldStyle(successCallback, failureCallback);