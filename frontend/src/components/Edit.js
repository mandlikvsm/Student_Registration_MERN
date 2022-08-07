import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Link ,useNavigate} from 'react-router-dom';
import { updatedata } from './context/ContextProvider';
import { Box,InputLeftAddon, InputGroup,Button,Flex,Spacer,VStack,Heading ,HStack,FormControl,Input} from '@chakra-ui/react'

const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const navigate = useNavigate("");

   const [inpval, setINP] = useState({
		
		name: "",
		
		department: "",
		email: "",
		mobile: "",
		address: ""
	})

    const setdata = (e) => {
       // console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
   // console.log(id);



    const getdata = async () => {

        const res = await  fetch (process.env.REACT_APP_API_URL+`/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
       // console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
      //      console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updatestud = async(e)=>{
      //  e.preventDefault();

       const {name,department,email,mobile,address}= inpval;

        const res2 = await fetch(process.env.REACT_APP_API_URL+`/updatestud/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,department,email,mobile,address
            })
        });

        const data2 = await res2.json();
      //  console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/")
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
           
	<Flex>
		
	  <Box bg='white.100' w='25%' p={4} />
		<Box  w='50%' p={4}  >
		
		<VStack  spacing='24px'>
	 
			
					 
					 <FormControl isRequired>
					 
					 <Input type = "text" name = "name" value = {inpval.name} onChange = {setdata} placeholder='First name' />
					 </FormControl>

					

						
					<FormControl isRequired>
					<Input  type = "text" name='department'  value = {inpval.department} onChange = {setdata}  placeholder='Department' />
					</FormControl>

						
					<FormControl isRequired>
					  <Input  type = "text" name='email'  value = {inpval.email} onChange = {setdata} placeholder='Email' />
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
					<Button type = "submit" onClick = {updatestud} colorScheme='blue'size='md'align= "center">Submit</Button>

			

		</VStack >

	 </Box>
	<Box bg='white.100' w='25%' p={4} />




	</Flex>

        </div>
    )
}

export default Edit;





