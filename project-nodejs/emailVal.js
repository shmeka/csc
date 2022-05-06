function emailValidator() {

    email = document.getElementById("email").value;
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(validEmail.test(email) ==false ) {
        alert("Please enter a valid email address!");
    } else {
        alert("Email format is valid!")
    }

    
}
