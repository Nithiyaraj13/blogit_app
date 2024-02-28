import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css"; // Import custom CSS file
import { Link } from "react-router-dom";
// import Image from '../component/logo.png';
import { useNavigate } from "react-router-dom";

import Footer from "./footer";
import HomeSlider from "./HomeSlider";
// import Feedback from 'react-bootstrap/esm/Feedback';
import Feedback from "./feedback";

const Afternav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="navbar">
        <Navbar.Brand href="#home">BlogIt {/* Your title */}</Navbar.Brand>
        <Navbar.Brand href="#home">
          {/* <img src="{image}" width="40" height="40" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-right">
            {" "}
            {/* Add the custom CSS class "nav-right" here */}
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
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
                Nature
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => navigate("/art")}>
                Art
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Afternav;
