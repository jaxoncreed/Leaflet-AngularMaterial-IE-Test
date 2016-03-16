var express = require('express');

var app = express();

app.get("/", function (req, res) {
  res.redirect("/test.html");
});

app.use("/bower_components", express.static('../bower_components'));
app.use(express.static('./'));

var port = process.env.PORT || 8005;
app.listen(port);
console.log('Application listening on port ' + port);