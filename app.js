const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send("This is the root URL of this application");
});

app.listen(3000, function() {
    console.log('Express server has started!');
});