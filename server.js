// Setup Modules
var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var port       = process.env.PORT || 3000;
var path       = require('path');
var db         = require('./models');

// Use Public for Frontend
app.use(express.static(__dirname + '/public'));

// View Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

//API Routes
app.get('/api/projects', function (req, res) {
  // send all books as JSON response
  db.Project.find(function(err, projects){
    if (err) { return console.log("index error: " + err); }
    res.json(projects);
  });
});

app.get('/api/projects/:id', function(req, res) {
  db.Project.findOne({_id: req.params.id }, function(err, project) {
    res.json(project);
  });
});

// Start Server
app.listen(port, function() {
  console.log('Server started on', port); 
});