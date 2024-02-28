

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

//import About from './About';

import Cookies from "js-cookie";

import React, { useState } from "react";
import Logo from "../logos/apple-touch-icon.png";
import "../App.css";

import {
  FaHome,
  FaList,
  FaUtensils,
  FaPlane,
  FaMicrochip,
  FaHeartbeat,
  FaTree,
  FaPalette,
  FaHeart,
  FaPaintBrush,
  FaUser,
  FaSignOutAlt,
  FaMoneyBill,
  FaInfo,
  FaCreativeCommons,
  FaNotesMedical,
} from "react-icons/fa"; // Import icons

const NavBar = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));

  const logout = () => {
    Cookies.remove("id");

    setLoggedIn(false);

    navigate("/login");
  };

  return (
    <>
      <Navbar
        bg="black"
        expand="lg"
        variant="dark"
        fixed="top"
        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <Navbar.Brand href="#home">
          {/* <div className='profile-image'>

            <img alt="Profile" src={images} />

          </div> */}
          {/* <h1>BLOGIT</h1> */}
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "50px",
              width: "50px",
              marginLeft: "50px",
              marginTop: "2px",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-right">
            <Nav.Link onClick={() => navigate("/search")}>Search</Nav.Link>

            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=> navigate("/myblogs")} >MyBlog</Nav.Link> */}
            <Nav.Link onClick={() => navigate("/About")}> About</Nav.Link>
            <NavDropdown
              title={<span>Categories</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => navigate("/food")}>
                Food
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/travel")}>
                Travel
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/Technology")}>
                Technology
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/Health")}>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/nature")}>
                Nature{" "}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/art")}>
                Art{" "}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span>User </span>} id="user-nav-dropdown">
              {loggedIn ? (
                <>
                  <NavDropdown.Item onClick={() => navigate("/userblogpage")}>
                    {" "}
                    Create Blog
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/myblogs")}>
                    {" "}
                    My Blogs
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/profile")}>
                    {" "}
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => logout()}>
                    {" "}
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item onClick={() => navigate("/login")}>
                  {" "}
                  Login
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
