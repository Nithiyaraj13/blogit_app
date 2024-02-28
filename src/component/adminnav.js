// import React from 'react';

// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// import './adminnav.css';

// // import { Link } from 'react-router-dom';

// // import Image from '../component/logo.png';

// import { useNavigate } from 'react-router-dom';

// const AdminNav = () => {

//   const navigate = useNavigate();

//   return (

//       <Navbar bg="black" expand="lg" variant="dark" className="navbar">

//       <Navbar.Brand href="#home">

//           <h1 style={{padding:"0 20px"}}>BlogIt</h1>

//         </Navbar.Brand>

//         <Navbar.Brand href="#home">

//         {/* <img src="{image}" width="40" height="40" /> */}

//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">

//           <Nav className="ml-auto nav-right"> {/* Add the custom CSS class "nav-right" here */}

//             <Nav.Link onClick={()=>navigate("/userlist")}>Userlist</Nav.Link>

//             <Nav.Link onClick={()=>navigate("/bloglist")}>All Blogs</Nav.Link>

//             <NavDropdown title="User" id="user-nav-dropdown">

//               <NavDropdown.Item onClick={()=>navigate("/admin")}>Profile</NavDropdown.Item>

//               <NavDropdown.Item onClick={()=>navigate("/login")}>Logout</NavDropdown.Item>

//             </NavDropdown>

//             </Nav>

// </Navbar.Collapse>

// </Navbar>

// )

// }

// export default AdminNav;
import React from "react";

import { FaAddressBook, FaPlusCircle, FcAddressBook } from "react-icons/fa";

// Import the appropriate icons

import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
  chakra,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

import { useState } from "react";

import {
  HamburgerIcon,
  SearchIcon,
  BellIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import {
  FaHeartbeat,
  FaList,
  FaUtensils,
  FaPlane,
  FaCamera,
  FaUser,
  FaLaptop,
  FaHeart,
  FaTree,
  FaPalette,
} from "react-icons/fa"; // Import the appropriate icons

const AdminNav = () => {
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));

  const logout = () => {
    Cookies.remove("id");

    setLoggedIn(false);

    navigate("/login");
  };

  const navigate = useNavigate();

  return (
    <Box
      bg="black"
      py={4}
      boxShadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
    >
      <Flex maxW="6xl" mx="auto" px={4} align="center">
        <chakra.h1
          fontSize="2xl" // Increase the font size
          fontWeight="bold"
          textTransform="uppercase" // Capitalize the text
          fontFamily="sans-serif" // Change font family
          letterSpacing="wide" // Adjust letter spacing
          color="white"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Blog it
          </Link>
        </chakra.h1>

        <Spacer />

        <Flex align="center">
          {/* <Menu>

 

            <MenuButton

 

              as={IconButton}

 

              aria-label="Categories"

 

              icon={<FaList />}

 

              size="md"

 

              variant="ghost"

 

              color="white"

 

              _hover={{ color: 'gray.200' }}

 

              colorScheme="pink"

 

            />

 

            <MenuList>

 

            <MenuGroup title="Categories">

 

                <MenuItem  onClick={()=>navigate("/food")}>

 

                  <FaUtensils style={{ marginRight: '15px' }} /> Food

 

                </MenuItem>

 

                <MenuItem onClick={()=>navigate("/travel")}>

 

                  <FaPlane style={{ marginRight: '15px' }} /> Travel

 

                </MenuItem>

 

                <MenuItem onClick={()=>navigate("/technology")}>

 

                  <FaLaptop style={{ marginRight: '15px' }} /> Technology

 

                </MenuItem>

 

                <MenuItem onClick={()=>navigate("/health")}>

 

                  <FaHeartbeat style={{ marginRight: '15px' }} /> Health

 

                </MenuItem>

 

                <MenuItem onClick={()=>navigate("/nature")}>

 

                  <FaTree style={{ marginRight: '15px' }} /> Nature

 

                </MenuItem>

 

                <MenuItem onClick={()=>navigate("/technology")}>

 

                  <FaPalette style={{ marginRight: '15px' }} /> Art

 

                </MenuItem>

 

              </MenuGroup>

 

            </MenuList>

 

          </Menu> */}

          <Menu>
            <MenuButton
              as={Button}
              onClick={() => navigate("/userlist")}
              colorScheme="white"
              style={{ marginLeft: "15px" }}
              _hover={{ color: "gray.200" }}
            >
              UserList
            </MenuButton>

            <MenuButton
              as={Button}
              onClick={() => navigate("/bloglist")}
              colorScheme="white"
              style={{ marginLeft: "15px" }}
              _hover={{ color: "gray.200" }}
            >
              All Blogs
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              colorScheme="pink"
              style={{ marginLeft: "15px" }}
            >
              Profile
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem onClick={() => navigate("/Admin")}>
                  My Account
                </MenuItem>

                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

          {/* ... other menu components ... */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminNav;
