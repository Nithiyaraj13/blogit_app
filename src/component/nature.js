import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Footer from "./footer";
import axios from "axios";
import n1 from "../logos/n1.png";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Testing from "./Testing";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";
export default function NatureMain() {
  const [data, setData] = useState([]);
  const [userActive, setUserActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/mangal/random-blog-category/Nature",
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
        // src={n1}
        src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="nature"
        style={{ marginTop: "0px", width: "100%", height: "280px" }}
      />
      <h1
        style={{
          padding: "30px 0 0 30px",
          fontWeight: "bold",
          fontFamily: "lora",
        }}
      >
        NATURE
      </h1>
      <p style={introTextStyle}>
        "Immerse Yourself in the Beauty of Nature: A Journey into the Wild.
        Welcome to our nature haven, a digital escape into the heart of the
        natural world. From majestic mountains to serene oceans, we're your
        window to the breathtaking landscapes that Earth offers. Join us as we
        explore the wonders of biodiversity, environmental conservation, and the
        intricate dance of ecosystems. Whether you're an outdoor enthusiast or
        simply seeking tranquility, we invite you to connect with the
        awe-inspiring beauty and serenity of nature."
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
