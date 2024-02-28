import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from "./feedback";
import Footer from "./footer";
import axios from "axios";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Testing from "./Testing";
import food from "../logos/food.png";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";
export default function Foodmain() {
  const [userActive, setUserActive] = useState(false);
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/mangal/random-blog-category/Food",
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
        src={food}
        alt="food"
        style={{ marginTop: "0px", width: "100%", height: "300px" }}
      />
      <h1
        style={{
          padding: "30px 0 0 30px",
          fontWeight: "bold",
          fontFamily: "lora",
        }}
      >
        FOOD
      </h1>
      <p style={introTextStyle}>
        "Discover the Heartbeat of Cultures Through Food. Food is more than
        sustenance; it's a universal language that bridges cultures and kindles
        connections. At our website, we explore the world's rich tapestry of
        flavors, sharing tales of tradition, innovation, and the joy that comes
        with every shared meal. Join us as we journey through recipes, stories,
        and the significance of food in shaping our lives and societies."
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
