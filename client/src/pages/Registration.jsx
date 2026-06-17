import React, { useState } from "react";
import API from "../services/Api";
import "./Registration.css";    
import { Link } from "react-router-dom";
function Registration() {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);

      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="circle one"></div>
        <div className="circle two"></div>

        <div className="brand">
          <span className="badge">✨ Volunteer Platform</span>

          <h1>
            Make an Impact.
            <br />
            Change Lives.
          </h1>

          <p>
            Join NayePankh Foundation and become part of a community dedicated
            to education, empowerment and social change.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <span>Volunteers</span>
            </div>

            <div className="stat">
              <h3>50+</h3>
              <span>Campaigns</span>
            </div>

            <div className="stat">
              <h3>10K+</h3>
              <span>Lives Impacted</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Account</h2>

            <p>Start your volunteer journey today</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              className="auth-input"
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                setform({
                  ...form,
                  name: e.target.value,
                })
              }
              required
            />

            <input
              className="auth-input"
              type="email"
              placeholder="Email Address"
              onChange={(e) =>
                setform({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setform({
                  ...form,
                  password: e.target.value,
                })
              }
              required
            />

            <button className="auth-btn" type="submit">
              Create Account
            </button>
          </form>

          <div className="auth-footer">
            Already have an account?
            <Link to="/"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
