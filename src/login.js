import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Cookies from "js-cookie";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("email:", Email, "password:", Password);

    axios
      .post("http://localhost:5000/mangal/login", { Email, Password })
      .then((res) => {
        if (res.data.message === "Success") {
          console.log(res.data.message);
          console.log(res.data.id);
          console.log("Response:", res.data);
          Cookies.set("id", res.data.id);
          navigate("/");
        } else if (res.data.message === "Admin") {
          // Cookies.set("id",response.data)
          console.log(res.data.message);
          console.log(res.data.id);
          console.log("Response:", res.data);
          Cookies.set("id", res.data.id);
          navigate("/admin");
        } else {
          setLoginMessage(res.data);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="login-body">
      <form onSubmit={handleSubmit}>
        <div className="login-wrapper">
          <h1>Login</h1>
          <div className="login-input-box">
            <input
              type="text"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {submitted && !Email && (
            <p className="login-error-message">Email is required</p>
          )}
          <div className="login-input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {submitted && !Password && (
            <p className="login-error-message">Password is required</p>
          )}
          <button type="submit" className="login-btn">
            Login
          </button>
          {submitted && loginMessage && (
            <p className="login-error-message">
              <br />
              {loginMessage}
            </p>
          )}

          <p>
            <br />

            <Link
              to="/register"
              style={{
                color: "white",

                textDecoration: "none",

                fontWeight: 600,
              }}
            >
              Don't have an account? Register Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
