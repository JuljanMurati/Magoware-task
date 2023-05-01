import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const authenticatedUser = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isAuthenticated"))) {
      navigate("/");
    }
  }, [navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (credentials.email && credentials.password) {
      if (
        credentials.email === authenticatedUser?.email &&
        credentials.password === authenticatedUser?.password
      ) {
        navigate("/");
        localStorage.setItem("isAuthenticated", true)
      } else {
        setErrorMessage("This user is not registered");
      }
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
          <h2 className="form-title">Sign in</h2>
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
              Sign in
            </button>
            <div className="error-message">{errorMessage}</div>
          </div>
          <a className="link" href="/registration">
            Registration
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
