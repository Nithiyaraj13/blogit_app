import React from "react";
import NavBar from "./Navbar";
import Slide from "./slides";
import Footer from "./footer";
import HomeSlider from "./HomeSlider";
import Testing from "./Testing";
import Feedback from "./feedback";
import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";

import Whatsnew from "./whatsnew";
export default function Home() {
  console.log("logss");
  const [userActive, setUserActive] = useState(false);
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [blogs, setblogs] = useState({});
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  const navigate = useNavigate();
  const fetchBlogbyid = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/mangal/blogs/b1a27234-4d8d-4c8c-92d8-41f16949924e",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.data;
      if (res) {
        console.log("new res", res);
        setblogs(res);
        console.log("response data ", response.data);
        navigateToBlogDetail();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigateToBlogDetail = () => {
    // navigate('/readblog', { state: { blogs } });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/mangal/random-blogs",
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
  const fetchData1 = async () => {
    try {
      const res = await axios.get("http://localhost:5000/mangal/most-liked", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDatas(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("error fetching data1", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData1(); // Fetch data when the component mounts
  }, []);
  console.log("blogs: ", blogs);

  return (
    <div style={{ fontFamily: "montserrat", marginTop: "0px" }}>
      {/* <button onClick={() => fetchBlogbyid()}>
        harsh
      </button> */}
      <div style={{ marginBottom: "10px" }}>
        {loggedIn ? <AppBar /> : <NewBar />}
      </div>

      <Slide />

      <div style={welcomeSectionStyle}>
        {/* <h1 style={{fontFamily:"montserrat"}}>Welcome to Our Blog Portal</h1> */}
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontFamily="montserrat"
          fontWeight="bold"
        >
          Welcome to Our Blog Portal
        </Text>
        <p style={{ fontFamily: "lora", fontStyle: "italic" }}>
          Explore the World of Ideas: Your Gateway to Engaging Blogs. Welcome to
          our virtual realm, where words come alive and thoughts find their
          voice. Here, we curate a diverse collection of insightful blogs that
          span a multitude of topics, each offering a unique perspective and a
          wealth of knowledge.
        </p>
        {/* Rest of the welcome text */}
      </div>

      <div>
        <Heading as="h2" size="xl" style={{ marginLeft: "40px" }}>
          What's New
        </Heading>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "60px",
            marginBottom: 20,
          }}
        >
          {/* {data.map((item) => (
    
    <Testing key={item._id} item={item} />

  ))}  */}

          <Whatsnew />
        </div>
      </div>

      <div>
        <Heading
          as="h2"
          size="xl"
          style={{ marginLeft: "40px", marginTop: "50px" }}
        >
          Most Popular
        </Heading>

        <div
          style={{
            marginLeft: "18px",
            marginBottom: "20px",
            gap: "-30px",
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            marginTop: 20,
            marginBottom: 20,
            gap: "40px",
          }}
        >
          {data.map((item) => (
            <Testing key={item._id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <Heading
          as="h2"
          size="xl"
          style={{ marginLeft: "40px", marginTop: "50px" }}
        >
          Most liked
        </Heading>

        <div
          style={{
            display: "flex",
            marginLeft: "18px",
            flexDirection: "row",
            width: "100vw",
            marginTop: 20,
            marginBottom: 20,
            gap: "40px",
          }}
        >
          {datas.map((item) => (
            <Testing key={item._id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const welcomeSectionStyle = {
  padding: "20px ",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  marginTop: "120px",
  marginBottom: "30px",
  margin: "80px",
};

// const sliderSectionStyle = {
//   padding: "40px 0",
//   backgroundColor: "#f8f8f8",
//   margin: "20px",
// };

// const feedbackSectionStyle = {
//   padding: "40px 0",
//   textAlign: "center",
//   backgroundColor: "#fff",
//   boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//   margin: "20px",
// };

// const feedbackCarouselStyle = {
//   // Adjust carousel size here
//   maxWidth: '800px', // Adjust as needed
//   margin: '0 auto', // Center the carousel
// };
