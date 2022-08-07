import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import React, {  useContext } from 'react'


import {
  Box,
  Flex,
  Avatar,
  HStack,
  Alert,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  AlertIcon,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Create New Student', 'Show Student List'];


const NavLink = ({ children }: { children: ReactNode }) => (
  
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue', 'blue'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
	
  const { isOpen, onOpen, onClose } = useDisclosure();


// eslint-disable-next-line
  const { studdata, setStuddata } = useContext(adddata);
// eslint-disable-next-line
    const {updata, setUPdata} = useContext(updatedata);
// eslint-disable-next-line
    const {dltdata, setDLTdata} = useContext(deldata);

  return (
    <>
      <Box bg={useColorModeValue('blue.500', 'gray.900')} px={4}>
        
		<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
		  <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
		  <HStack spacing={8} alignItems={'center'}>
            <Box>Home</Box>
            
			<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              
		
			<Link  to='/'>
									Dashboard
						</Link>

			<Link  to='/studentlist'>
									Show Student List
						</Link>
						
			<Link  to='/studentregister'>
									Create New Student
						</Link>				
			  
            </HStack>
          </HStack>
          
		  <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                  }
                />
              </MenuButton>
              
			  <MenuList>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
	  
	  
	  
	   {
                studdata ?
                    <>
                        <div >
					<Alert status='success'>
    <AlertIcon />
  <strong>{studdata.name  }</strong>  added succesfully!
  </Alert>
   

                          

                        </div>
                    </> : ""
            }
			
            {
                updata ?
                    <>
                        <div >
						
						 <Alert status='info'>
    <AlertIcon />
     <strong>{updata.name}</strong>  updated succesfully!
  </Alert>
                          
                            
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div >
						 <Alert status='error'>
    <AlertIcon />
    <strong>{dltdata.name}</strong>  deleted succesfully!
  </Alert>
						
                            
                          
                        </div>
                    </> : ""
            }
			

     
    </>
  );
}

	 