import React from "react";

import { FaAddressBook, FaPlusCircle, FcAddressBook } from "react-icons/fa";

// Import the appropriate icons

import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

const AppBar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));

  const logout = () => {
    Cookies.remove("id");

    setLoggedIn(false);

    navigate("/login");
  };

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
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Blog it
          </div>
        </chakra.h1>

        <Spacer />

        <Flex align="center">
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            size="md"
            variant="ghost"
            color="white"
            _hover={{ color: "gray.200" }}
            mr={4}
            onClick={() => navigate("/search")}
          />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Categories"
              icon={<FaList />}
              size="md"
              variant="ghost"
              color="white"
              _hover={{ color: "gray.200" }}
              colorScheme="pink"
            />

            <MenuList>
              <MenuGroup title="Categories">
                <MenuItem onClick={() => navigate("/food")}>
                  <FaUtensils style={{ marginRight: "15px" }} /> Food
                </MenuItem>

                <MenuItem onClick={() => navigate("/travel")}>
                  <FaPlane style={{ marginRight: "15px" }} /> Travel
                </MenuItem>

                <MenuItem onClick={() => navigate("/technology")}>
                  <FaLaptop style={{ marginRight: "15px" }} /> Technology
                </MenuItem>

                <MenuItem onClick={() => navigate("/health")}>
                  <FaHeartbeat style={{ marginRight: "15px" }} /> Health
                </MenuItem>

                <MenuItem onClick={() => navigate("/nature")}>
                  <FaTree style={{ marginRight: "15px" }} /> Nature
                </MenuItem>

                <MenuItem onClick={() => navigate("/art")}>
                  <FaPalette style={{ marginRight: "15px" }} /> Art
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              onClick={() => navigate("/about")}
              as={Button}
              colorScheme="white"
              style={{ marginLeft: "15px" }}
              _hover={{ color: "gray.200" }}
            >
              About
            </MenuButton>

            <MenuButton
              onClick={() => navigate("/myblogs")}
              as={Button}
              colorScheme="white"
              style={{ marginLeft: "15px" }}
              _hover={{ color: "gray.200" }}
            >
              My Blogs
            </MenuButton>

            <MenuButton
              onClick={() => navigate("/Userblogpage")}
              as={Button}
              colorScheme="white"
              style={{ marginLeft: "15px" }}
              _hover={{ color: "gray.200" }}
            >
              Create Blogs
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
                <MenuItem onClick={() => navigate("/profile")}>
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

export default AppBar;
