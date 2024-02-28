import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import NavBar from "./Navbar";

import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.css";

// import Button from 'react-bootstrap/Button';
import { Button } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

import { MdDelete } from "react-icons/md";

import { AiTwotoneEdit } from "react-icons/ai";

import { useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";

import axios from "axios";

import emptyNotebookImage from "../logos/no-task.png";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";

export default function Myblog() {
  const [userActive, setUserActive] = useState(false);

  const [cardData, setCardData] = useState([]);

  const { id } = useParams();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [category, setCategory] = useState("");
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const [image, setImage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [cardToDelete, setCardToDelete] = useState({});

  const [emptyMessage, setEmptyMessage] = useState(false);

  useEffect(() => {
    axios

      .get("http://localhost:5000/mangal/getblog")

      .then((response) => {
        setCardData(response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteFromDb1 = (id) => {
    axios

      .delete(`http://localhost:5000/mangal/delete-blog/${id}`)

      .then((response) => {
        console.log(
          "Document deleted successfully from database 1:",
          response.data
        );

        setCardData(cardData.filter((card) => card._id !== id));

        checkEmptyState();

        handleDeleteConfirmed(id);
      })

      .catch((error) => {
        console.error("Error deleting document from database 1:", error);
      });
  };

  const handleDeleteFromDb2 = (title) => {
    axios

      .delete(`http://localhost:5000/mangal/delete-homeblog/${title}`)

      .then((response) => {
        console.log(
          "Document deleted successfully from database 2:",
          response.data
        );
      })

      .catch((error) => {
        console.error("Error deleting document from database 2:", error);
      });
  };

  const handleDeleteFromDb3 = (title) => {
    axios

      .delete(`http://localhost:5000/mangal/delete-whatsnewblog/${title}`)

      .then((response) => {
        console.log(
          "Document deleted successfully from database 3:",
          response.data
        );
      })

      .catch((error) => {
        console.error("Error deleting document from database 3:", error);
      });
  };

  const handleDelete = (id, title) => {
    setShowModal(true);

    setCardToDelete({ id, title });
  };

  const handleDeleteConfirmed = (id, title) => {
    handleDeleteFromDb1(id);

    handleDeleteFromDb2(title);

    handleDeleteFromDb3(title);

    setShowModal(false);
  };

  const checkEmptyState = () => {
    if (cardData.length === 0) {
      setEmptyMessage(true);
    } else {
      setEmptyMessage(false);
    }
  };

  return (
    <div>
      <div>
        {loggedIn ? <AppBar /> : <NewBar />}

        <br></br>

        <br></br>

        <br></br>

        <br></br>

        <h1
          style={{ fontWeight: "600", marginLeft: "15px", marginTop: "-50px" }}
        >
          My Blogs!
        </h1>
      </div>

      <div className="myblog">
        {cardData.length === 0 ? (
          <>
            <img
              src={emptyNotebookImage}
              alt="Empty Notebook"
              style={imageStyle}
            />

            <p style={textStyle}>Writer's Blank</p>
          </>
        ) : (
          cardData.map((card) => (
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

                    <br />

                    {/* <Button
          flex="1"
          variant="outline"
          colorScheme="blue"
          leftIcon={<FiExternalLink />}
        >  */}
                    <Link
                      style={{ color: "blue", textDecoration: "underline" }}
                      to={`/readblog/${card._id}`}
                    >
                      Read more
                    </Link>
                    {/* </Button> */}

                    <p className="card-text">
                      {/* <small className='text-muted'>{new Date(card.updatedAt).toDateString()}</small> */}

                      {/* <span className='card-date'>{new Date(card.createdAt).toDateString()}</span> */}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      {/* <Button className='mb-2 mr-2' variant='outline-primary'>

                        <AiTwotoneEdit />

                        Edit blog

                      </Button> */}

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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
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

const imageStyle = {
  width: "200px",

  opacity: 0.8,

  marginLeft: "550px",
};

const textStyle = {
  fontSize: "24px",

  fontWeight: "bold",

  marginTop: "20px",

  marginLeft: "550px",
};
