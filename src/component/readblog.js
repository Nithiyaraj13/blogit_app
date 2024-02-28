import React, { useEffect, useState } from "react";

import axios from "axios";
import { AiTwotoneEdit } from "react-icons/ai";
//import { Button } from 'react-bootstrap';
import { Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import "./readblog.css";
import NavBar from "./Navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import CommentDialog from "./CommentDialog";
import Cookies from "js-cookie";

export default function Readblog() {
  // const location = useLocation();
  // const { blogs } = location.state;
  // console.log("yours blogs:",blogs);
  const [userActive, setUserActive] = useState(false);
  const [blogDetails, setBlogDetails] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mangal/getblog/${id}`)
      .then((response) => {
        setBlogDetails(response.data);
        setUpdatedTitle(response.data.title);
        setUpdatedContent(response.data.content);
        setUpdatedImage(response.data.image);
        setUpdatedCategory(response.data.category);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
      });

    //   const handleSave = () => {
    //     // Prepare the updated data
    //     const updatedData = {
    //         title: updatedTitle,
    //         content: updatedContent,
    //         // Other properties you might need to update
    //     };

    //     // Send the updated data to the server
    //     axios.put(`http://localhost:5000/mangal/update-blog/${id}`, updatedData)
    //         .then(response => {
    //             // Update the state with the updated data
    //             setBlogDetails(response.data);
    //             setIsEditing(false);
    //         })
    //         .catch(error => {
    //             console.error('Error updating blog:', error);
    //         });
    // };
  }, [id]);

  //   const [Name,setName] = useState();

  //   useEffect(() => {
  //   const id = Cookies.get('id');
  //     axios.get('http://localhost:5000/mangal/myprofile', { params: { id } })
  //         .then((res) => {
  //             console.log('Profile response:', res.data);
  //             setName(res.data.Name);

  //         })
  //         .catch((error) => {
  //             console.error('Error fetching user profile:', error);
  //         });
  // }, []);
  //   const handleupdate = () =>{
  //     const updatedData = {
  //         title: updatedTitle,
  //         content: updatedContent,
  //         image:updatedImage,
  //         category:updatedCategory
  //         // Other properties you might need to update
  //     };

  //     // Send the updated data to the server
  //     axios.put(`http://localhost:5000/mangal/update-blog/${id}`, updatedData)
  //         .then(response => {
  //             // Update the state with the updated data
  //             setBlogDetails(response.data);
  //             setIsEditing(false);
  //         })
  //         .catch(error => {
  //             console.error('Error updating blog:', error);
  //         });

  //   }
  //   const handleupdate1 = (title) =>{
  //     const updatedData = {
  //         title: updatedTitle,
  //         content: updatedContent,
  //         image:updatedImage,
  //         category:updatedCategory
  //         // Other properties you might need to update
  //     };

  //     // Send the updated data to the server
  //     axios.put(`http://localhost:5000/mangal/update-whatsnewblog/${title}`, updatedData)
  //         .then(response => {
  //             // Update the state with the updated data
  //             setBlogDetails(response.data);
  //             setIsEditing(false);
  //         })
  //         .catch(error => {
  //             console.error('Error updating blog:', error);
  //         });

  //   }

  //   const handleupdate2 = (title) =>{
  //     const updatedData = {
  //         title: updatedTitle,
  //         content: updatedContent,
  //         image:updatedImage,
  //         category:updatedCategory
  //         // Other properties you might need to update
  //     };

  //     // Send the updated data to the server
  //     axios.put(`http://localhost:5000/mangal/update-homeblog/${title}`, updatedData)
  //         .then(response => {
  //             // Update the state with the updated data
  //             setBlogDetails(response.data);
  //             setIsEditing(false);
  //         })
  //         .catch(error => {
  //             console.error('Error updating blog:', error);
  //         });

  //   }

  //   const handleSave = (id,title) => {
  //     // Prepare the updated data
  //     handleupdate(id);
  //     handleupdate1(title);
  //     handleupdate2(title)

  // };
  const handleSave = () => {
    const updatedData = {
      title: updatedTitle,
      content: updatedContent,
      image: updatedImage,
      category: updatedCategory,
      // Other properties you might need to update
    };

    // Send the updated data to the server for the main blog update
    axios
      .put(`http://localhost:5000/mangal/update-blog/${id}`, updatedData)
      .then((response) => {
        // Update the state with the updated data
        setBlogDetails(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating main blog:", error);
      });

    // Send the updated data to the server for the what's new blog update
    axios
      .put(
        `http://localhost:5000/mangal/update-whatsnewblog/${blogDetails.title}`,
        updatedData
      )
      .then((response) => {
        // Update the state with the updated data
        setBlogDetails(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating what's new blog:", error);
      });

    // Send the updated data to the server for the home blog update
    axios
      .put(
        `http://localhost:5000/mangal/update-homeblog/${blogDetails.title}`,
        updatedData
      )
      .then((response) => {
        // Update the state with the updated data
        setBlogDetails(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating home blog:", error);
      });
  };

  return (
    <>
      {/* {console.log("blog data ", blogs)} */}
      {loggedIn ? <AppBar /> : <NewBar />}
      <br></br>
      <div className="blog-container">
        <div className="blog-image">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={blogDetails.image} alt="Blog related image" />
        </div>
        <div className="blog-content">
          <div className="blog-heading">
            {isEditing ? (
              <textarea
                style={{ border: "2px solid black" }}
                placeholder="Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            ) : (
              <h1>{blogDetails.title}</h1>
            )}
          </div>

          <div className="blog-user">
            {isEditing ? (
              <textarea
                style={{ width: "300px", border: "2px solid black" }}
                value={updatedImage}
                placeholder="Image URL"
                onChange={(e) => setUpdatedImage(e.target.value)}
              />
            ) : (
              <img src={blogDetails.image} alt="user profile" />
            )}
            {isEditing ? (
              <Select
                style={{ border: "2px solid black", marginLeft: "2px" }}
                placeholder="Select Category"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
              >
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Technology">Technology</option>
                <option value="Nature">Nature</option>
                <option value="Health">Health</option>
                <option value="Art">Art</option>
              </Select>
            ) : (
              <div>
                <p>
                  <a>{blogDetails.category}</a>
                </p>
              </div>
            )}
            {/* <p>{blogDetails.createdAt}</p>
                        <p>{blogDetails.updatedAt}</p> */}
            <p style={{ marginLeft: "10px" }}>{blogDetails.date}</p>
          </div>
          <div className="scrollable-content">
            {isEditing ? (
              <textarea
                style={{ width: "500px", border: "2px solid black" }}
                placeholder="Content"
                rows={6}
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
            ) : (
              <p>{blogDetails.content}</p>
            )}
          </div>
          <br />
          {isEditing ? (
            <Button
              className="mb-2 mr-2"
              variant="outline"
              colorScheme="green"
              onClick={() => handleSave(blogDetails.id, blogDetails.title)}
            >
              Save
            </Button>
          ) : (
            <Button
              className="mb-2 mr-2"
              //variant="outline-primary"
              colorScheme="blue"
              variant="outline"
              onClick={() => setIsEditing(true)}
            >
              <AiTwotoneEdit />
              Edit blog
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
