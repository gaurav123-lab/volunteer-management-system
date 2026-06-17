import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import API from "../services/Api";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/volunteer");
      }
     
    } catch (err) {
      alert("USER NOT FOUND OR INVALID CREDENTIALS");
    }
    console.log(formData);
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay"></div>

        <div className="login-content">
          <span className="login-badge">
            ✨ Volunteer Platform
          </span>

          <h1>
            Welcome
            <br />
            Back.
          </h1>

          <p>
            Every volunteer hour creates
            real change in someone's life.
          </p>

          <div className="review-card">
            <h3>
              ⭐ 4.9/5 Volunteer Experience
            </h3>

            <p>
              Working with NayePankh helped
              me contribute meaningfully to
              society.
            </p>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-header">
            <h2>Sign In</h2>

            <p>
              Access your volunteer account
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <input
              className="login-input"
              type="email"
              placeholder="Email Address"
             
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <input
              className="login-input"
              type="password"
              placeholder="Password"
             
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#">
                Forgot Password?
              </a>
            </div>

            <button
              className="login-btn"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="login-footer">
            Don't have an account?
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;
