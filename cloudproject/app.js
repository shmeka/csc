import { generate } from 'generate-password';

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World two!\n');
});

app.get('/mars' , function(req, res) {
  res.send('hello Mars!\n');
});




function genPass () {
    
    var password = generate({
        length:10,
        numbers: true
    });

    alert(password)

}


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});