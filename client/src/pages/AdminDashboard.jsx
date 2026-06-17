import React, { useEffect, useState } from "react";
import API from "../services/Api";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  const [stats, setStats] = useState({});
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };
  const getVolunteers = async () => {
    try {
      const res = await API.get("/volunteer/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

   
    setVolunteers(res.data.volunteers);
    } catch (error) {
      console.log(error);
    }
  };
  const getStats = async () => {
    const res = await API.get("/volunteer/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStats(res.data);
  };
  useEffect(() => {
    getVolunteers();
    getStats();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(
        `/volunteer/status/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      getVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage volunteers and track community impact.</p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total</span>
          <h2>{stats.total || 0}</h2>
        </div>

        <div className="stat-card">
          <span>Approved</span>
          <h2>{stats.approved || 0}</h2>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <h2>{stats.pending || 0}</h2>
        </div>

        <div className="stat-card">
          <span>Rejected</span>
          <h2>{stats.rejected || 0}</h2>
        </div>
      </div>

      <div className="volunteer-grid">
        {volunteers.map((volunteer) => (
          <div className="volunteer-card" key={volunteer._id}>
            <div className="card-top">
              <h3>{volunteer.userId?.name}</h3>

              <span
                className={`status ${
                  volunteer.status === "Approved"
                    ? "approved"
                    : volunteer.status === "Rejected"
                      ? "rejected"
                      : "pending"
                }`}
              >
                {volunteer.status}
              </span>
            </div>

            <p>📧 {volunteer.userId?.email}</p>

            <p>📱 {volunteer.phone}</p>

            <p>📍 {volunteer.city}</p>

            <p>🛠 {volunteer.skills}</p>

            <div className="action-btns">
              <button
                className="approve-btn"
                onClick={() => updateStatus(volunteer._id, "Approved")}
              >
                Approve
              </button>

              <button
                className="reject-btn"
                onClick={() => updateStatus(volunteer._id, "Rejected")}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
