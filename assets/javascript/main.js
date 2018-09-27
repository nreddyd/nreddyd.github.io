$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    console.log("toggle clicked");
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("active");
    $(this).toggleClass("fa-angle-double-right fa-angle-double-left");
  });

  // initialise firebase
  var config = {
    apiKey: "AIzaSyBzscO3oYqO2JKz6uCzifdfm2HQ2K6L6a0",
    authDomain: "myportfoliocontactmessages.firebaseapp.com",
    databaseURL: "https://myportfoliocontactmessages.firebaseio.com",
    storageBucket: "myportfoliocontactmessages.appspot.com"
  };

  firebase.initializeApp(config);

  database = firebase.database();

  // submit button clicked
  $("#submit").on("click", function() {
    // function to make sure all the input fields are entered
    function validateInput() {
      var inputValid = true;
      if (
        $("#username").val() === "" ||
        $("#email").val() === "" ||
        $("message").val() === ""
      ) {
        inputValid = false;
      }
      return inputValid;
    }

    if (validateInput() === true) {
      var newMessage = {
        name: $("#username")
          .val()
          .trim(),
        email: $("#email")
          .val()
          .trim(),
        phone: $("#phone")
          .val()
          .trim(),
        message: $("#message")
          .val()
          .trim()
      };

      // upload the user input/messages to the firebase database
      database.ref().push(newMessage);
    }
  });
});
