
var express = require('express');
var app = express();
//Params - REST-artig
app.get('/user/:uid', function (req, res) {
    res.send("User ID is set to " + req.params.uid);
    //tu was
});
//Server starten
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});