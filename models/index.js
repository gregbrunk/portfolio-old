var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/portfolio");

module.exports.Project = require("./project.js");