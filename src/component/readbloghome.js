import React, { useEffect, useState } from "react";

import axios from "axios";

import "./readbloghome.css";
import NavBar from "./Navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";

export default function Readbloghome() {
  const [userActive, setUserActive] = useState(false);
  const [blogDetails, setBlogDetails] = useState({});
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mangal/random-blogs/${id}`)
      .then((response) => {
        setBlogDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
      });
  }, [id]);
  return (
    <div>
      {/* <NavBar />
    <div className="blog-container" style={{marginTop:'100px'}}>
        <div className="blog-heading"> */}
      {/* <h1>{blogDetails.title}</h1> */}
      {/* <p>{blogDetails.title}</p>
        </div>

        <div className="blog-user">
            <img src={blogDetails.image} alt="user profile"></img>
            <p><a>{blogDetails.category} </a></p>
        </div>
        <div className="blog-content">
            <p>{blogDetails.author}</p>
        </div> */}
      {/* <div className="blog-content">
            <p>{blogDetails.date}</p>
        </div> */}

      {/* <div className="blog-image">
            <img src={blogDetails.image} alt="Blog related image"></img>
        </div>
        

        <div className="blog-content">
            <p>{blogDetails.post}</p>
        </div>
        <div className="blog-content">
            <p>{blogDetails.content}</p>
        </div>
    </div>
    <Footer /></div> */}

      {loggedIn ? <AppBar /> : <NewBar />}
      <br></br>
      <br></br>
      <br></br>
      <div className="blog-container">
        <div className="blog-image">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={blogDetails.image} alt="Blog related image"></img>
        </div>
        <div className="blog-content">
          <div className="blog-heading">
            <h1>{blogDetails.title}</h1>
          </div>

          <div className="blog-user">
            <img src={blogDetails.image} alt="user profile"></img>
            {/* <p><a>{blogDetails.category}</a></p><br></br> */}
            <p>
              <a>{blogDetails.author}</a>
            </p>
          </div>

          <div className="scrollable-content">
            <p>{blogDetails.content}</p>
          </div>
          <div className="scrollable-content">
            <p>{blogDetails.post}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
