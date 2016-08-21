// project.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	categories: [String],
	title: String,
	tools: [String],
	summary: String,
	keyimage: String,
	otherimages: [String],
	github: String,
	website: String
});

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;