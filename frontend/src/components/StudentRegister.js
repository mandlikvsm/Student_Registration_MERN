
import { Link ,useNavigate} from 'react-router-dom';
import { adddata } from './context/ContextProvider';
import React, {useContext ,useState}  from 'react';
import { Box, FormErrorMessage,InputGroup,Button,InputLeftAddon,Flex,Spacer,VStack,Heading ,HStack,FormControl,Input} from '@chakra-ui/react'


function StudentRegister () {
	
	console.log("hello env file");
	console.log(process.env.REACT_APP_API_URL);
	// eslint-disable-next-line
	const {studdata, setStuddata } = useContext(adddata);
	const navigate = useNavigate();
	//const history = useHistory();
	
	const [inpval, setINP] = useState({
		
		name: "",
		
		department: "",
		email: "",
		mobile: "",
		address: ""
	})

	
	const setdata = (e) => {
		//console.log("set data values");
		//console.log(e.target.value);
		
	const {name,value } = e.target;
	
	setINP((preval) => {
		
	return {
		...preval,
		[name]: value
		
	}
	})
	
}
	
	const addinpdata = async (e) => {
		//alert("button clicked");
		//console.log("input value");
		//console.log(inpval);
		e.preventDefault();
		
	const {name,department,email,mobile,address}= inpval;
	console.log(inpval.name);
	
	const res = await fetch (process.env.REACT_APP_API_URL+"/studentregister", {
		method: "POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify ({
		name,department,email,mobile,address
		})
		
		
	});
	
	const data = await res.json();
	
	//console.log("data after fetch", data);
	
	if(res.status === 422 || !data ) {
		console.log ("error ");
		alert("error");
		
	} else {
		//history.push("/")
		//alert("data added Successfully");
		
		navigate("/")
		
		setStuddata(data)
		console.log("data added");
	}
	}
	
	
	return (
	
<>
				<HStack>
					<Link  to='/'><Button colorScheme='blue'size='md'>	Home  </Button></Link>
					<Link to='/studentlist'><Button colorScheme='blue'size='md'> Show  Student List</Button></Link>	
				</HStack>
      
				  
				  <Box p={4}>
					  <Heading align = "center" color = "blue">
					  Student Registration system
					  </Heading>
				  </Box>
				
	
	<Flex>
		
	  <Box bg='white.100' w='25%' p={4} />
		<Box  w='50%' p={4}  >
		
		<VStack  spacing='20px'>
	 
			
					 
					 <FormControl isRequired>
					 
					 <Input type = "text" name = "name" value = {inpval.name} onChange = {setdata} placeholder='Full Name'  />
					 </FormControl>

						
				

						
					<FormControl isRequired>
					<Input  type = "text" name='department'  value = {inpval.department} onChange = {setdata}  placeholder='Department' />
					</FormControl>

						
					<FormControl isRequired>
					  <Input  type = "text" name='email'  value = {inpval.email} onChange = {setdata} placeholder='Email' />
					<FormErrorMessage>Email is required.</FormErrorMessage>
					</FormControl>

						
					<FormControl isRequired>
										
						<InputGroup>
						<InputLeftAddon children='+91' />
						 <Input type = "tel" name='mobile'  value = {inpval.mobile} onChange = {setdata} placeholder='Mobile Number' />
					   </InputGroup>
										
					
					 
					</FormControl>


						
					<FormControl isRequired>
					 <Input  type = "text" name='address'  value = {inpval.address} onChange = {setdata} placeholder='Address' />
					</FormControl>

					<Spacer />
					<Button type = "submit" onClick = {addinpdata} colorScheme='blue'size='md'align= "center">Submit</Button>

			

		</VStack >

	 </Box>
	<Box bg='white.100' w='25%' p={4} />




	</Flex>


</>

	);
}
	
	export default StudentRegister;

