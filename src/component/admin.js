import React, { useState, useEffect } from "react";

import "./admin.css";

import Card from "react-bootstrap/Card";

import NavBar from "./Navbar";

import Button from "react-bootstrap/Button";

import Footer from "./footer";

import AdminNav from "./adminnav";
import Cookies from "js-cookie";
import axios from "axios";

const Admin = () => {
  const [Name, setName] = useState();

  const [Email, setEmail] = useState();

  const [Phnumber, setPhnumber] = useState();

  useEffect(() => {
    const id = Cookies.get("id");
    axios
      .get("http://localhost:5000/mangal/myprofile", { params: { id } })
      .then((res) => {
        console.log("Profile response:", res.data);
        setName(res.data.Name);
        setEmail(res.data.Email);
        setPhnumber(res.data.Phnumber);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  return (
    <div>
      <AdminNav></AdminNav>

      <h1 style={{ marginTop: "20px" }}>Admin Page</h1>

      <div className="cards">
        <Card className="profile-card">
          <Card.Img
            className="profile-img"
            variant="top"
            src="http://images.assetsdelivery.com/compings_v2/jemastock/jemastock1807/jemastock180768912.jpg"
            alt="User Image"
          />

          <Card.Body>
            <Card.Title>{Name}</Card.Title>

            <Card.Text className="info">
              Email Id:{Email}
              <br />
              Phone No: {Phnumber} <br />
              {/* Password : Nithi12345 */}
            </Card.Text>

            {/* <Button variant="primary">Edit Profile</Button> */}
          </Card.Body>
        </Card>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Admin;
