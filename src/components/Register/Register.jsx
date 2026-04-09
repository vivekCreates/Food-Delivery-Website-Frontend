import React, { useReducer, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isLoggedIn: false,
  });
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
   console.log('user:',user)
  }
  return (
    <main>
    <div className="sign-in">
      <div className="form-text">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmitForm}>
        <input
          onChange={handleInput}
          name="username"
          type="text"
          value={user.username}
          placeholder="username"
        />
        <input
          onChange={handleInput}
          name="email"
          type="email"
          value={user.email}
          placeholder="email"
        />
        <input
          onChange={handleInput}
          name="password"
          type="password"
          value={user.password}
          placeholder="password"
        />
        <button type="submit">Create account</button>
        <div className="other-info">
          <input type="checkbox" name="" id="" />
          <p>By continuiting. i agree to the terms of use & privacy policy.</p>
        </div>
        <p id="last">
         
          Already have an account?<span className="login"><Link to={"/login"}> Login here.</Link></span>
        </p>
      </form>
    </div>
    </main>
  );
};

export default Register;
