import React, { useState, useEffect } from "react";
import Afternav from "./AfterNav";
import Feedback from "./feedback";
import Footer from "./footer";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Testing from "./Testing";
import artpic from "../logos/artpic.jpg";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";
import Arts from "../logos/arts.png";
export default function Artmain() {
  const [userActive, setUserActive] = useState(false);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/mangal/random-blog-category/Art",
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
        // src={Arts}
        src="https://images-cdn.exchange.art/non_live_data/creator_data/usGMM5T7czP5ZUozJtC62zPy7tq1/brands/Web3%20Goddes/series/Aesthetics%20in%20simplicity/banner-ada90504-ee5e-426d-8efe-2113abcad4a3.png?auto=avifwebp"
        alt="art"
        style={{ marginTop: "0px", width: "100%", height: "350px" }}
      />
      <h1
        style={{
          padding: "30px 0 0 30px",
          fontWeight: "bold",
          fontFamily: "lora",
        }}
      >
        ART
      </h1>
      <p style={introTextStyle}>
        "Unveiling Creativity's Canvas: A Glimpse into the World of Art. Welcome
        to our art gallery, a virtual space where imagination knows no bounds.
        From vibrant brushstrokes to sculpted masterpieces, we're your guides to
        the diverse realm of artistic expression. Join us as we celebrate the
        works of renowned artists, share insights into different art forms, and
        delve into the stories behind captivating creations. Whether you're an
        art aficionado or just curious about the creative process, we invite you
        to immerse yourself in the colors, shapes, and emotions that make up the
        tapestry of art."
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
  // padding: "30px 40px 10px 40px",
  marginLeft: "30px",
  fontFamily: "montserrat",
  lineHeight: "1.5",
  fontSize: "18px",
};
