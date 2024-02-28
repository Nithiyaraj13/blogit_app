import React from "react";

import NavBar from "./Navbar";

import axios from "axios";

import { Component, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Footer from "./footer";

import Form from "react-bootstrap/Form";

import "./userblogpage.css";

import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidCloudUpload } from "react-icons/bi";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";

export default function Userblogpage() {
  const [title, setTitle] = useState("");
  const [userActive, setUserActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const [image, setImage] = useState("");

  const [content, setContent] = useState("");

  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    // console.log(title,category,content,imageUrl)

    e.preventDefault();

    axios
      .post("http://localhost:5000/mangal/create-blog", {
        title,
        content,
        category,
        image,
      })

      // .then((result) => console.log(result.json()))

      // .catch((err) => console.log(err));
      .then((response) => {
        console.log(response.data);
        toast.success(`${title} uploaded successfully !`, {
          position: toast.POSITION.TOP_CENTER,
          // icon: <BiSolidCloudUpload/>,
        });
      })

      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://localhost:5000/mangal/create-blogs", {
        title,

        content,

        category,

        image,
      })

      // .then((result) => console.log(result.json()))

      // .catch((err) => console.log(err));

      .then((response) => {
        console.log(response.data);
        // toast.success(`${title} is uploding..`, {
        //   position: toast.POSITION.TOP_CENTER,
        //   icon: <BiSolidCloudUpload/>,
        // });
      })

      .catch((err) => {
        console.log(err);
      });

    axios
      .post("http://localhost:5000/mangal/all-blog", {
        title,

        content,

        category,

        image,
      })

      // .then((result) => console.log(result.json()))

      // .catch((err) => console.log(err));

      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>{loggedIn ? <AppBar /> : <NewBar />}</div>

      <div className="content">
        <h1 style={{ fontFamily: "lora" }}>What's on your Mind </h1>

        <Form.Group controlId="blogs">
          {/* <Form.Label></Form.Label> */}

          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br></br>

          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
          />
          <br></br>

          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write down your thoughts"
            onChange={(e) => setContent(e.target.value)}
          />
          <br></br>

          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Categories</option>

            <option value="Food">Food</option>

            <option value="Travel">Travel</option>

            <option value="Technology">Technology</option>

            <option value="Health">Health</option>

            <option value="Art">Art</option>

            <option value="Nature">Nature</option>
          </Form.Select>
          <br></br>

          <div style={{ display: "flex", gap: "80%" }}>
            <a href="#">
              <Button variant="success" onClick={handleSubmit}>
                Blogit
              </Button>
            </a>
            <ToastContainer />
          </div>
        </Form.Group>
        <br></br>

        <br></br>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
