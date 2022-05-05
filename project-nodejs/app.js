//console.log("Hello World today again \n")

// ask user if they want to generate a password or validate an email format


var generator = require('generate-password');

var password = generator.generate({
    length:10,
    numbers: true
})

console.log(password)



