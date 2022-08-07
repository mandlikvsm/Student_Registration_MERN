require ("dotenv").config();
const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const cors = require("cors");
const router = require("./routes/router");


 
const stud = require("./models/studSchema");
require("./DB/conn");



const port = 8083;


app.use(cors());
app.use(express.json());


app.get('/',(req,res) => {
res.send('we are on home')});

app.use(router);
app.listen(port,() => {
	console.log(`server is starting at port Number ${port}`);
});


