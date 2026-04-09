import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("user: ",user)
  };
  return (
    <main>
    <div className="login-box">
      <div className="login-form-text">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInput}
          name="email"
          value={user.email}
          type="email"
          placeholder="email"
        />
        <input
          onChange={handleInput}
          name="password"
          value={user.password}
          type="password"
          placeholder="password"
        />
        <button type="submit">Login account</button>
        <div className="other-info">
          <input type="checkbox" name="" id="" />
          <p>By continuiting. i agree to the terms of use & privacy policy.</p>
        </div>
        <p id="last">
          I don't have an account?<span className="login"> <Link to={"/register"}> Register</Link></span>
        </p>
      </form>
    </div>
    </main>
  );
};

export default Login;
