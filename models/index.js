var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

module.exports.Project = require("./project.js");