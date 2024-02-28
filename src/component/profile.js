// import React, {useState,useEffect } from "react";
// import axios from "axios";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import FormSelect from "react-bootstrap/FormSelect";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import Dropdown from "react-bootstrap/Dropdown";
// import "./profile.css";
// import NavBar from "./Navbar";
// import { Link } from "react-router-dom";
// import Footer from "./footer";
// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import {BiSolidCloudUpload} from 'react-icons/bi'

// export default function Profile() {

//   const [title, setTitle] = useState("");

//   const [image, setImage] = useState("");

//   const [content, setContent] = useState("");

//   const [category, setCategory] = useState("");

//   const [Name,setName] = useState();

//   const [Password,setPassword] = useState();

//   const [Email,setEmail] = useState();

//   const [Phnumber,setPhnumber] = useState();

//   useEffect(() => {

//     const id = sessionStorage.getItem('id');

//     axios.get('http://localhost:5000/mangal/myprofile', { params: { id } })

//         .then((res) => {

//             setName(res.data.Name);

//             setPassword(res.data.Password)

//             setEmail(res.data.Email)

//             setPhnumber(res.data.Phnumber)

//         })

//         .catch((error) => {

//             console.error('Error fetching user profile:', error);

//         });

// }, []);

// //   useEffect(() => {

// //     const id = sessionStorage.getItem('id');

// //     axios.get('http://localhost:5000/mangal/myprofile', { params: { id } })

// //         .then((res) => {

// //             setName(res.data.Name);

// //             setPassword(res.data.Password)

// //             setEmail(res.data.Email)

// //             setPhnumber(res.data.Phnumber)

// //         })

// //         .catch((error) => {

// //             console.error('Error fetching user profile:', error);

// //         });

// // }, []);

//   const handleSubmit = (e) => {
//     // console.log(title,category,content,imageUrl)

//     e.preventDefault();

//     axios
//       .post("http://localhost:5000/mangal/create-blog", {
//         title,
//         content,
//         category,
//         image,
//       })

//       // .then((result) => console.log(result.json()))

//       // .catch((err) => console.log(err));

//       .then((response) => {
//         console.log(response.data);
//         // toast.success("Success Notification !", {
//         //   position: toast.POSITION.TOP_CENTER
//         // });
//       })

//       .catch((err) => {
//         console.log(err);
//       });

//     axios
//       .post("http://localhost:5000/mangal/create-blogs", {
//         title,

//         content,

//         category,

//         image,
//       })

//       // .then((result) => console.log(result.json()))

//       // .catch((err) => console.log(err));

//       .then((response) => {
//         console.log(response.data);
//         toast.success(`${title} is uploding..`, {
//           position: toast.POSITION.TOP_CENTER,
//           icon: <BiSolidCloudUpload/>,
//         });
//       })

//       .catch((err) => {
//         console.log(err);
//       });

//     axios
//       .post("http://localhost:5000/mangal/all-blog", {
//         title,

//         content,

//         category,

//         image,
//       })

//       // .then((result) => console.log(result.json()))

//       // .catch((err) => console.log(err));

//       .then((response) => {
//         console.log(response.data);
//       })

//       .catch((err) => {
//         console.log(err);
//       });

//   };

//   return (
//     <div>
//       <NavBar></NavBar>

//       <div className="cards" style={{ marginTop: "70px" }}>
//         <Card className="profile-card">
//           <Card.Img
//             variant="top"
//             src="https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png"
//             alt="User Image"
//           />

// <Card.Body>
// <Card.Title>Name:{Name}</Card.Title>
// <Card.Text className='info'>
//   Email:{Email}
//   <br />
//   Phone No:{Phnumber} <br/>
// </Card.Text>
// <Button variant="primary">Edit Profile</Button>
// </Card.Body>
//         </Card>

//         {/* <div className="content">
//           <h1> NEW BLOG ! </h1>

//           <input type='textarea' placeholder=' Give your Heading to Blog ! '/>

//        <input id='blog' type='text' placeholder=' Write your  Blog ! '/>

//           <Form.Group controlId="blogs">
//             <Form.Label>Blog Title</Form.Label>

//             <Form.Control
//               as="textarea"
//               rows={1}
//               required
//               placeholder="Give heading to your blog"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <br></br>

//             <Form.Control
//               as="textarea"
//               rows={1}
//               required
//               placeholder="URL"
//               onChange={(e) => setImage(e.target.value)}
//             />
//             <br></br>

//             <Form.Control
//               as="textarea"
//               rows={10}
//               required
//               placeholder="Write your blogs"
//               onChange={(e) => setContent(e.target.value)}
//             />
//             <br></br>

//             <Form.Select
//               aria-label="Default select example"
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option>Categories</option>

//               <option value="Food">Food</option>

//               <option value="Travel">Travel</option>

//               <option value="Technology">Technology</option>

//               <option value="Health">Health</option>

//               <option value="Art">Art</option>

//               <option value="Nature">Nature</option>
//             </Form.Select>
//             <br></br>

//             <Button variant="success" onClick={handleSubmit}>
//               Blogit
//             </Button>

//             <Link to="/myblogs">
//               <Button variant="outline-info">My blogs</Button>
//             </Link>
//             <ToastContainer/>
//           </Form.Group>
//           <br></br>

//           <br></br>
//         </div> */}
//       </div>

//       <Footer></Footer>
//     </div>
//   );
// }

import React, { Component, useState, useEffect } from "react";

import axios from "axios";

import "./profile.css";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

import FormSelect from "react-bootstrap/FormSelect";

import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./AppBar";
import NewBar from "./NewBar";

import NavBar from "./Navbar";

import Footer from "./footer";

import Cookies from "js-cookie";

export default function Profile() {
  const [Name, setName] = useState();
  const [userActive, setUserActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));

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
      {loggedIn ? <AppBar /> : <NewBar />}
      <br></br>
      <h1 style={{ fontFamily: "montserrat", marginLeft: "10px" }}>
        Profile Page
      </h1>

      <div className="card-container">
        <header className="headers">
          <img
            style={{ marginLeft: "174px" }}
            className="profile-img"
            src="http://images.assetsdelivery.com/compings_v2/jemastock/jemastock1807/jemastock180768912.jpg"
            alt="logo"
          />
        </header>

        <h1 className="bold-text" style={{ marginRight: "10px" }}>
          {Name} <span className="normal-text">{}</span>
        </h1>

        <h2 className="normal-text">{}</h2>

        <div className="social-container" style={{ marginLeft: "20px" }}>
          <div className="followers">
            <h1 className="bold-text">{Email}</h1>

            <h2 className="smaller-text">Email id</h2>
          </div>

          <div className="likes">
            <h1 className="bold-text">{Phnumber}</h1>

            <h2 className="smaller-text">Phone</h2>
          </div>

          <div className="photos"></div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
