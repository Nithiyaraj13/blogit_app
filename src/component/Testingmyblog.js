import React, { useParams, useState, useEffect } from "react";
import CommentDialog from "./CommentDialog";
import {
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { addElipsis, addElipsistitle } from "./utils/common-utils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

//import './myblogs.css';
import { MdDelete } from "react-icons/md";
export default function TestingMyblog({ item, betterStyle }) {
  const [cardData, setCardData] = useState([]);
  const { id } = useParams(); // Get the blog post ID from the URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState({});

  const boxShadowStyle = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  const navigate = useNavigate();

  const handleDeleteFromDb1 = (id) => {
    axios
      .delete(`http://localhost:5000/mangal/delete-blog/${id}`)
      .then((response) => {
        console.log(
          "Document deleted successfully from database 1:",
          response.data
        );
        setCardData(cardData.filter((card) => card._id !== id));
        handleDeleteConfirmed(id);
      })
      .catch((error) => {
        console.error("Error deleting document from database 1:", error);
      });
  };

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
        handleDeleteConfirmed(id);
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
        handleDeleteConfirmed(id);
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
    handleDeleteFromDb1(id);
    handleDeleteFromDb2(title);
    handleDeleteFromDb3(title);

    // Close the modal after deletion
    setShowModal(false);
  };

  return (
    <Card
      maxW="md"
      boxShadow={boxShadowStyle}
      borderRadius="lg"
      style={{ width: 400, marginLeft: 10 }}
    >
      <CardHeader>
        <Flex justify="space-between" align="center" height="18">
          <Heading
            size="md"
            fontFamily="Montserrat, sans-serif"
            fontWeight="extrabold"
            color="CaptionText"
          >
            {addElipsistitle(item.title)}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody boxShadow={boxShadowStyle}>
        <Text>{addElipsis(item.post)}</Text>
        <Text>{addElipsis(item.content)}</Text>
      </CardBody>
      <Image
        h="200px"
        objectFit="cover"
        boxShadow={boxShadowStyle}
        src={item.image}
        alt="Chakra UI"
      />
      <CardFooter
        boxShadow={boxShadowStyle}
        justify="space-between"
        flexWrap="wrap"
      >
        <CommentDialog item={item} />
        <Link to={`/readblog/${item._id}`}>
          <Button
            flex="1"
            variant="outline"
            colorScheme="blue"
            leftIcon={<FiExternalLink />}
          >
            Read more
          </Button>
        </Link>
        <Button
          className="mb-2 ml-2 float-right"
          variant="outline-danger"
          onClick={() => handleDelete(item._id, item.title)}
        >
          <MdDelete />
        </Button>
      </CardFooter>
    </Card>
  );
}
