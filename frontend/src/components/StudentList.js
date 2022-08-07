import { Link } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';

import {
  Table,
  Thead,
  Tbody,
  
  Tr,
  Button,
  Th,
  td,
  TableCaption,
  Box,
  Heading,
  TableContainer,
} from '@chakra-ui/react'




import React, { useState, useEffect, useContext } from 'react'



export default function StudentList() {

    const [getStudentdata, setStudentdata] = useState([]);
   // console.log(getStudentdata);

  
  const { studdata, setStuddata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

    
	const getdata = async (e) => {
		

        const res = await fetch(process.env.REACT_APP_API_URL +"/getdata", {
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
            setStudentdata(data)
        //    console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])
	
	

    const deletedstud = async (id) => {

        const res2 = await fetch(process.env.REACT_APP_API_URL+`/deletestud/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
       // console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error in deleteddata");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }




return (
<>


			
			
		<Link  to='/'>
								<Button>	Home  </Button>
						</Link>
						
						<Link  to='/studentregister'>
								<Button>	Create New Student</Button>
						</Link>		
      <Box p={4}>
	  <Heading align = "center" color = "blue">
	  Student Registration system
	  </Heading>
	  </Box>
<TableContainer>
  
  <Table variant='unstyled'>
    <TableCaption>List of registered students</TableCaption>
   
   <Thead bg = "blue.300">
      <Tr>
		<Th>ID</Th>
        <Th>Name</Th>
        <Th>Department</Th>
		 <Th>Email</Th>
        <Th isNumeric>Mobile</Th>
		 <Th>City</Th>
		 <Th>Action</Th>
      </Tr>
    </Thead>
    
	<Tbody>
      
	 
  {
                                getStudentdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.department}</td>
                                                <td>{element.email}</td>
                                                <td>{element.mobile}</td>
												 <td>{element.address}</td>
												
                                                <td >
												
													<Link  to={`/edit/${element._id}`}><Button  colorScheme='blue'size='sm'>	Update  </Button></Link>
													<Link  to='/'><Button type = "submit" onClick = {() => deletedstud(element._id)} colorScheme='red'size='sm'align= "center" >	Delete  </Button></Link>
                                                   
                                                    
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }










      
	
    </Tbody>
   
   
  </Table>
  
</TableContainer>
</>
);
}
