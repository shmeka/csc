function genPass () {
    
    length = document.getElementById("length").value
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var nums = "123456789"
    var specChar = "~!@#$%^&*()_+|}{:?><,./;][=-`"

    length = 8;
    password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    alert("password hello");



}


function charOnly() {
    length = 8;
    password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    alert(password);
}

//document.querySelector('button').addEventListener('click', genPass);

function randomPassword(length) {
    
    alpha = document.getElementById("alpha");
    nums = document.getElementById("nums");
    specChar = document.getElementById("specChar");
    var chars = "";

    if (alpha.checked)
        chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (nums.checked)
        chars += "1234567890"
    if (specChar.checked)
        chars+= "!@#$%^&*()-+<>"


       
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    myform.row_password.value = pass;
}





//document.querySelector('#nums').addEventListener('check', addNumbers);
//document.querySelector('#passGen').addEventListener('click', addNumbers); 