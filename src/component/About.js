
import React from "react";
import "./About.css";
import NavBar from "./Navbar";
import Footer from "./footer";
import AppBar from "./AppBar";
import NewBar from "./NewBar";
import Cookies from "js-cookie";
import { useState } from "react";
export default function About() {
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get("id"));
  return (
    <div className="about">
      {loggedIn ? <AppBar /> : <NewBar />}
      <div className="about-content" style={{ padding: "70px 0" }}>
        <h1 className="about-title">Everyone has a story to tell</h1>
        <div style={{ padding: "10px 0" }}>
          <h1 className="about-subtitle">
            Ultimately, our goal is to deepen our collective understanding of
            the world through the power of writing.
          </h1>
        </div>
        <div style={{ padding: "10px 0" }}></div>
        <h3 className="about-text">
          BlogIt is a home for human stories and ideas. Here, anyone can share
          insightful perspectives, useful knowledge, and life wisdom with the
          world—without building a mailing list or a following first. The
          internet is noisy and chaotic; Medium is quiet yet full of insight.
          It’s simple, beautiful, collaborative, and helps you find the right
          audience for whatever you have to say.
        </h3>
        <div style={{ padding: "10px 0" }}></div>
        <h3 className="about-text">
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we’re building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </h3>
        <div style={{ padding: "40px 0" }}></div>
      </div>
      <Footer />
    </div>
  );
}
