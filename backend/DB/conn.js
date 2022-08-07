const mongoose = require ('mongoose');



const DB = "mongodb+srv://vsm123:vsm123@studentdb.9kzcl.mongodb.net/StudentDB?retryWrites=true&w=majority";

mongoose.connect(DB, {
	
	useNewUrlParser:true,
useUnifiedTopology:true}).then(() => console.log("mongodb connection started")).catch((error) => console.log(error.message));