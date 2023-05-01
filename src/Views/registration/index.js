import React, { useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      localStorage.setItem("User", JSON.stringify(credentials));
      navigate("/signin")
    }
  };

  const handleCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page background">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form-title">Register</h2>
          <div className="input-container">
            <label className="label mb-2">
              Email:
              <input
                type="email"
                name="email"
                className="auth-input"
                value={credentials.email}
                onChange={handleCredentials}
              />
            </label>
            <label className="label">
              Password:
              <input
                type="password"
                name="password"
                className="auth-input"
                value={credentials.password}
                onChange={handleCredentials}
              />
            </label>
            <button type="submit" className="auth-button">
              Register
            </button>
          </div>
          <a className="link" href="/signin">
            Sign In
          </a>
        </form>
      </div>
    </div>
  );
}

export default Registration;
