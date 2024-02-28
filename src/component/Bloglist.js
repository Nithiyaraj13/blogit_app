import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import NavBar from "./Navbar";

import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.css";

// import Button from 'react-bootstrap/Button';
import { Button } from "@chakra-ui/react";

//import './myblogs.css';

import { MdDelete } from "react-icons/md";

import { AiTwotoneEdit } from "react-icons/ai";

import { useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";

import axios from "axios";

import AdminNav from "./adminnav";

export default function Bloglist() {
  const [cardData, setCardData] = useState([]);
  // State to store fetched data
  const [cardNew, setCardnew] = useState([]);
  const { id } = useParams(); // Get the blog post ID from the URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState({});

  useEffect(() => {
    // Fetch data from the API when the component mounts

    axios
      .get("http://localhost:5000/mangal/fetchblogs")

      .then((response) => {
        setCardData(response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  const handleDeleteFromDb2 = (title) => {
    // Send a DELETE request to the second database

    axios
      .delete(`http://localhost:5000/mangal/delete-homeblog/${title}`)

      .then((response) => {
        console.log(
          "Document deleted successfully from database 2:",
          response.data
        );

        setCardData(cardData.filter((card) => card.title !== title));

        // handleDeleteConfirmed(id);
      })

      .catch((error) => {
        console.error("Error deleting document from database 2:", error);
      });
  };

  const handleDeleteFromDb3 = (title) => {
    // Send a DELETE request to the second database

    axios
      .delete(`http://localhost:5000/mangal/delete-whatsnewblog/${title}`)

      .then((response) => {
        console.log(
          "Document deleted successfully from database 3:",
          response.data
        );

        setCardData(cardData.filter((card) => card.title !== title));

        // handleDeleteConfirmed(id);
      })

      .catch((error) => {
        console.error("Error deleting document from database 3:", error);
      });
  };

  const handleDelete = (id, title) => {
    // if (window.confirm('Are you sure you want to delete this blog?')) {
    setShowModal(true);
    setCardToDelete({ id, title });
    // }
  };

  const handleDeleteConfirmed = (id, title) => {
    // Call your delete API endpoints here
    // handleDeleteFromDb1(id);
    handleDeleteFromDb2(title);
    handleDeleteFromDb3(title);

    // Close the modal after deletion
    setShowModal(false);
  };

  return (
    <div>
      <div>
        <AdminNav />
        <br></br>
        <br></br>

        <h1 style={{ fontWeight: "600" }}>All Blogs</h1>
      </div>

      <div className="myblog">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card mb-3 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <div className="row g-2">
              <div className="col-md-4">
                <img
                  src={card.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>

                  <small>{card.category}</small>
                  <br></br>

                  {/* <p className="card-text">{card.content}</p> */}

                  {/* <small className='text-muted'><a href={`/readblog /:${card._id}`} >Read more</a></small> */}

                  {/* <Link  to={`/readbloghome/${card._id}`}>Read more</Link> */}
                  <Link
                    style={{ color: "blue", textDecoration: "underline" }}
                    to={`/random-blogs/${card._id}`}
                  >
                    Read more
                  </Link>

                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(card.updatedAt).toDateString}
                    </small>

                    <span className="card-date">
                      {new Date(card.createdAt).toDateString}
                    </span>
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* <button className='btn btn-color-outline-info'>Edit</button> */}

                    {/* <Button className="mb-2 mr-2" variant="outline-primary" onClick={()=>handleSubmit(card._id)}><AiTwotoneEdit/>Edit blog</Button>  */}

                    <Button
                      // className='mb-2 ml-2'
                      // variant='outline-danger'
                      colorScheme="red"
                      onClick={() => handleDelete(card._id, card.title)}
                      display="flex"
                      alignItems="center"
                      boxShadow="lg" // Add boxShadow property
                      _hover={{ boxShadow: "lg", textDecoration: "none" }}
                      style={{ marginLeft: "50px" }}
                    >
                      <span style={{ marginRight: "5px" }}>
                        <MdDelete />
                      </span>
                      Delete
                    </Button>

                    {/* <Button className="mb-2 ml-2" variant="outline-danger" onClick={() => handleDelete(card._id,card.title)}><MdDelete/>Delete</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the blog with title:{" "}
          <strong>{cardToDelete.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              handleDeleteConfirmed(cardToDelete.id, cardToDelete.title)
            }
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}
