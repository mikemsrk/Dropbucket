var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8000;

// require('./lib/middleware.js')(app, express); // load up all middlewares

var uploadRouter = require('./routes/upload');

app.use('/upload', uploadRouter);

// Serve our static ../client files.
app.use(express.static(path.join(__dirname, '../client')));

app.listen(port,function(err){
  console.log('app listening on...' + port);
});
