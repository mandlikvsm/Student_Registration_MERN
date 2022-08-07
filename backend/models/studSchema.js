const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
	name: {
		type:String,
		required:true
	},
	
	
	
	department: {
		type:String,
		required:true
	},
	
	email: {
		type:String,
		required:true,
		unique:true
	},
	
	mobile: {
		type:Number,
		required:true
	},
	
	address: {
		type:String,
		required:true
	},
	
});

const stud = new mongoose.model('stud',studSchema);

module.exports = stud;