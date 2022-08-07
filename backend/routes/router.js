const express = require ("express");

const router = express.Router();
const stud =  require("../models/studSchema");


// register user

router.post("/studentregister",async(req,res) => {
	//console.log(req.body);
	
	const {name,department,email,mobile,address} = req.body;
	
	if(!name  || !department || !email || !mobile || !address) {
		res.status(404).json("please fill the data");
	}
	
	try {
		const prestud = await stud.findOne({email:email});
		console.log(prestud);
		
		if(prestud) {
			res.status(404).json("this user is already present");
					}
		else {
			const addstud = new stud({name,department,email,mobile,address});
				
				
				await addstud.save();
				res.status(201).json(addstud);
				console.log(addstud);
				}
	}catch (error)
		{
		res.status(404).json(error)
		}
})

// get studdata

router.get("/getdata",async (req,res) => {
	try {
		const userdata = await stud.find();
		res.status(201).json(userdata)
	//	console.log(userdata);
	} catch (error) {
		res.status(422).json(error);
	}
})

// get individual student

router.get("/getstud/:id",async(req,res) => {
	
	try {
		
	console.log(req.params);
	const {id} = req.params;
	
	const studindividual = await stud.findById({_id:id});
//	console.log(studindividual);
	res.status(201).json(studindividual)
	
	} catch (error) {
		res.status(404).json(error);
	}
})
	
	// update user data
	
	router.patch("/updatestud/:id", async (req,res) => {
		try {
			const {id} = req.params;
			
			const updatedstud = await stud.findByIdAndUpdate(id,req.body, {
				new:true
			});
			
		//	console.log(updatedstud);
			res.status(201).json(updatedstud);
			
		} catch (error){
			
			res.status(422).json(error);
		}
	})
	
	// delete user
	
	router.delete ("/deletestud/:id", async (req,res) => {
		try {
			const {id} = req.params;
			
			const deletedstud = await stud.findByIdAndDelete ({_id:id})
		//	console.log(deleteduser);
			res.status(201).json (deletedstud);
			
		} catch (error) {
			res.status(422).json(error);
		}
		
	})
	


module.exports = router;

