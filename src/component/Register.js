
import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Phnumber, setPhnumber] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false); // Add submitted state

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Regular expression to validate phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isPasswordValid = (password) => {
    // Check if password has a minimum length of 6 characters
    return password.length >= 6;
  };

  const validateForm = () => {
    let isValid = true;

    if (!isEmailValid(Email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isPhoneNumberValid(Phnumber)) {
      setPhoneError("Invalid phone number format");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!isPasswordValid(Password)) {
      setPasswordError("Password must have a minimum of 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true on form submission

    if (!validateForm()) {
      return;
    }

    console.log(
      "name :",
      User,
      " email :",
      Email,
      " password :",
      Password,
      " phone :",
      Phnumber
    );

    axios
      .post("http://localhost:5000/mangal/register", {
        Name: User,
        Email: Email,
        Password: Password,
        Phnumber: Phnumber,
      })
      .then((result) => {
        console.log(result);

        if (result.data.error) {
          setErrorMessage(result.data.error);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
            />
            {submitted && !User && (
              <p className="error-message">Enter the username</p>
            )}
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhnumber(e.target.value)}
            />
            {phoneError && <p className="error-message">{phoneError}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>

          <br />
          <button type="submit" className="btn">
            Welcome!!!
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}
