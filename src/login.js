import React, { useState } from "react";
import "./login.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const clearError = () => {
    setError("");
  };
  const handleChangeUserName = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "authData");
          navigate("/home");
        })
        .catch((error) => {
          setError(error.message);
        });

      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h1>Login</h1>
            <input
              name="email"
              type="email"
              placeholder="Enter your email-id"
              value={email}
              onChange={handleChangeUserName}
              onFocus={clearError} 
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
              onFocus={clearError} 
            />
            <Link to="/Home" className="link2">
            <button className="btn2" type="submit">
            <strong>Login</strong>
            </button>
            </Link>
          <p> Don't have an account?  
            <Link to="/Signup" className="link1">
            <strong>Register</strong>
            </Link>
          </p> 
          </div>
        </form>
      </div>
    </div>
  );
}