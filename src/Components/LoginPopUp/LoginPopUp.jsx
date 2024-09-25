import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the path to your firebase.js
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currState === "Login") {
      // Handle login
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful');
        setShowLogin(false); // Close the popup after successful login
      } catch (error) {
        alert(error.message);
      }
    } else {
      // Handle sign up
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully');
        setShowLogin(false); // Close the popup after successful sign up
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={handleSubmit} className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
