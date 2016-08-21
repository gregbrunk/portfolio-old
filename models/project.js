// project.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	categories: [String],
	title: String,
	technologies: [String],
	summary: String,
	keyImage: String,
	otherImages: [String],
	githubUrl: String,
	websiteUrl: String
});

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;