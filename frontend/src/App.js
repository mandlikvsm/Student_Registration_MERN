import React from 'react';
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Box,VStack } from '@chakra-ui/react';
//import RouteDemo from "./components/RouteDemo";

import StudentRegister from "./components/StudentRegister";
import Edit from "./components/Edit";

function App() {
  return (
  
  
     <>
      
	
	 <Router>
        
        <Routes>
          <Route exact path = '/' element={< Navbar />}></Route>
          <Route exact path = '/studentregister' element={< StudentRegister />} ></Route>
		  <Route exact path = '/edit/:id' element = {<Edit />} ></Route>

          <Route exact path='/studentlist' element={<StudentList />}></Route>


        </Routes>
      
    </Router>
     
   
	</>
  );
}

export default App;

/*
	
	*/