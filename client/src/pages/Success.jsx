import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

function Success() {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">
          ✅
        </div>

        <h1>
          Registration Successful
        </h1>

        <p>
          Thank you for registering as a
          volunteer with NayePankh
          Foundation.
        </p>

        <p>
          Our team will contact you when
          volunteer opportunities matching
          your profile become available.
        </p>

        <Link
          className="success-btn"
          to="/"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Success;