import React, { useState } from "react";
import API from "../services/Api";
import "./VolunteerForm.css";
import { useNavigate } from "react-router-dom";

function VolunteerForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    phone: "",
    address: "",
    skills: "",
    availability: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await API.post("/volunteer/create", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      });
      alert(res.data.message);
      setForm({
        phone: "",
        address: "",
        skills: "",
        availability: "",
      });
      navigate("/success");
    } catch (err) {
      console.log(err);
      alert("LOGIN FIRST");
    }
  };
  return (
    <div className="volunteer-page">
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      <div className="volunteer-wrapper">
        <div className="volunteer-top">
          <span className="volunteer-badge">✨ Volunteer Network</span>

          <h1>Become a Volunteer.</h1>

          <p>
            Join NayePankh Foundation and help create meaningful impact through
            education, community development and social change.
          </p>
        </div>

        <div className="volunteer-card">
          <form onSubmit={handleSubmit} className="volunteer-form">
            <div className="input-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="input-group">
              <label>City</label>

              <input
                type="text"
                name="city"
               
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>

            <div className="input-group">
              <label>Skills</label>

              <input
                type="text"
                name="skills"
               
                onChange={handleChange}
                placeholder="Teaching, Design, Marketing..."
              />
            </div>

            <div className="input-group">
              <label>Availability</label>

              <select
                name="availability"
              
                onChange={handleChange}
              >
                <option value="">Select Availability</option>

                <option value="Weekdays">Weekdays</option>

                <option value="Weekends">Weekends</option>

                <option value="Anytime">Anytime</option>
              </select>
            </div>

            <button className="submit-btn" type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VolunteerForm;
