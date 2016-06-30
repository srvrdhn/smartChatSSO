function createUserFunc(){

 window.alert(5 + 6);
 var ref = new Firebase("https://smarterplogin.firebaseio.com");
  ref.createUser({

    var html_email = document.getElementById('fieldUser');
    var html_passw = document.getElementById('fieldPassword');

    email: "bobtony@firebase.com",
  password: "correcthorsebatterystaple"
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
}

function a_message(){
  alert('I came from an external script! round 2');
}
