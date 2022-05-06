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
    myform.password.value = pass;
}





//document.querySelector('#nums').addEventListener('check', addNumbers);
//document.querySelector('#passGen').addEventListener('click', addNumbers); 