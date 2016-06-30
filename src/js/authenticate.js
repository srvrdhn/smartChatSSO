var ref = new Firebase("https://smarterplogin.firebaseio.com");
ref.authWithPassword({

  var html_email = document.getElementById('fieldUser');
  var html_passw = document.getElementById('fieldPassword');

  email    : html_email,
  password : html_passw
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
