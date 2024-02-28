import React, { useState } from "react";

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
  IconButton,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addElipsis, addElipsistitle } from "./utils/common-utils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Testing({ item, betterStyle }) {
  const [istoggle, setToggle] = useState(false);
  const boxShadowStyle = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  const [isLiked, setIsLiked] = useState(false); // Add this state
  const [likes, setLikes] = useState(item.likes);

  // const handleLikeClick = async () => {
  //     try {
  //         setIsLiked(!isLiked)
  //       if (!isLiked) {
  //         const response = await axios.post(`http://localhost:5000/mangal/like/${item._id}`);

  //         if (response.data.success) {
  //           // Update the local state to indicate the post is liked
  //           setLikes(likes + 1);
  //           setIsLiked(true);
  //           console.log("blog liked");
  //         }
  //       } else {
  //         // Send a request to the server to remove the like
  //         const unlikeResponse = await axios.delete(`http://localhost:5000/mangal/unlike/${item._id}`);
  //         if (unlikeResponse.data.success) {
  //           // Update the local state to indicate the post is not liked
  //           setLikes(likes - 1);
  //           setIsLiked(false);
  //           console.log("blog unliked");
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error handling like/unlike:', error);
  //     }
  //   };
  const handleLikeClick = async () => {
    try {
      // Toggle the isLiked state
      const updatedIsLiked = !isLiked;
      setIsLiked(updatedIsLiked);

      if (!updatedIsLiked) {
        // If unliking, send a request to remove the like
        const unlikeResponse = await axios.delete(
          `http://localhost:5000/mangal/unlike/${item._id}`
        );
        if (unlikeResponse.data.success) {
          // Update the local state to indicate the post is not liked
          setLikes(likes - 1);
          console.log("blog unliked");
        }
      } else {
        // If liking, send a request to add the like
        const likeResponse = await axios.post(
          `http://localhost:5000/mangal/like/${item._id}`
        );
        if (likeResponse.data.success) {
          // Update the local state to indicate the post is liked
          setLikes(likes + 1);
          console.log("blog liked");
        }
      }
    } catch (error) {
      console.error("Error handling like/unlike:", error);
    }
  };

  const navigate = useNavigate();

  return (
    <Card
      maxW="md"
      boxShadow={boxShadowStyle}
      borderRadius="lg"
      style={{ width: 420, marginLeft: 20, width: "350px" }}
    >
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Heading size="md" fontFamily="lora">
            {addElipsistitle(item.title)}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody boxShadow={boxShadowStyle}>
        <Text fontFamily="montserrat">{addElipsis(item.post)}</Text>
        <Text fontFamily="montserrat">{addElipsis(item.content)}</Text>
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
        <Flex alignItems="center">
          <IconButton
            icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            colorScheme="red"
            aria-label="Like"
            onClick={handleLikeClick}
            mr={2}
          />

          <Text style={{ alignItems: "center", marginTop: "10px" }}>
            {item.likes} Likes
          </Text>
        </Flex>
        <CommentDialog item={item} />
        <Link to={`/random-blogs/${item._id}`}>
          <Button
            flex="1"
            variant="outline"
            colorScheme="blue"
            leftIcon={<FiExternalLink />}
          ></Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
