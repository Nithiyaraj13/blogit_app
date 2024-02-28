import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from "./feedback";
import Footer from "./footer";
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Testing from "./Testing";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import tech from "../logos/tech.jpg";
import Cookies from "js-cookie";
import Techs from "../logos/techs.png";

export default function TechnologyMain() {
  const [userActive, setUserActive] = useState(false);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/mangal/random-blog-category/Technology",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loggedIn ? <AppBar /> : <NewBar />}
      <img
        src={Techs}
        alt="technology"
        style={{ marginTop: "0px", width: "100%", height: "300px" }}
      />
      <h1
        style={{
          padding: "30px 0 0 30px",
          fontWeight: "bold",
          fontWeight: "bold",
          fontFamily: "lora",
        }}
      >
        TECHNOLOGY
      </h1>
      <p style={introTextStyle}>
        "Unveiling Tomorrow's World: Navigating the Landscape of Technology.
        Welcome to our tech haven, where we decode the digital age and its
        innovations. From cutting-edge gadgets to revolutionary breakthroughs,
        we're your guide through the labyrinth of technology. Join us as we
        unravel the mysteries of code, circuitry, and the transformative impact
        of tech on our lives. Whether you're a tech enthusiast or just curious
        about the future, we invite you to plug in and explore the realms of
        possibility that technology brings."
      </p>
      <div className="container text-center" style={{ marginTop: "10px" }}>
        <div
          className="row card-row"
          style={{ marginLeft: "-50px", marginBottom: "20px" }}
        >
          {data.map((blog) => (
            <div
              className="col-lg-4 col-md-6 card-column"
              key={blog._id}
              style={{ marginTop: "40px", marginBottom: "20px" }}
            >
              <Testing key={blog._id} item={blog} style={{ width: 40 }} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const introTextStyle = {
  marginLeft: "40px",
  fontFamily: "montserrat", // Specify the desired font family
  fontSize: "18px", // Specify the desired font size
  lineHeight: "1.5", // Specify the desired line height
  color: "#333", // Specify the desired text color
  fontStyle: "italic",
  // Specify the desired font style
};
