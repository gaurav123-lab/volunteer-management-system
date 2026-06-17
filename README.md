# 🌟 NayePankh Foundation Volunteer Management System

A full-stack Volunteer Management System built for NayePankh Foundation to streamline volunteer registration, application management, and administrative approval workflows.

---

## 📌 Project Overview

The NayePankh Foundation Volunteer Management System enables volunteers to register, submit applications, and allows administrators to manage volunteer records efficiently through a secure dashboard.

This project was developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with JWT-based authentication and role-based access control.

---

## 🚀 Features

### User Features

* User Registration
* User Login Authentication
* JWT Token Authorization
* Volunteer Application Submission
* Responsive User Interface
* Success Confirmation Page

### Admin Features

* Secure Admin Login
* View All Volunteers
* Approve Volunteer Applications
* Reject Volunteer Applications
* Volunteer Statistics Dashboard
* Logout Functionality

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

---

## 📂 Project Structure

```text
NayePankh-Foundation
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── db
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Create .env File

```env
MONGO_URI=mongodb://localhost:27017/registration
JWT_SECRET=your_secret_key
PORT=5000
```

### Start Backend

```bash
npm start
```

### Start Frontend

```bash
cd ../client
npm run dev
```

---

## 🔐 Authentication & Authorization

* JWT-based authentication
* Protected Routes
* Role-Based Access Control
* Admin and Volunteer Access Separation

---

## 📊 Admin Dashboard

The Admin Dashboard provides:

* Total Volunteers Count
* Approved Volunteers Count
* Pending Volunteers Count
* Rejected Volunteers Count
* Application Status Management

---

## 🎯 Future Enhancements

* Email Notifications
* Volunteer Profile Management
* Event Management Module
* Admin Analytics Dashboard
* MongoDB Atlas Deployment
* Cloud Hosting Integration

---

## 👨‍💻 Developer

**Gaurav Prajapati**

## 📄 License

This project is developed for educational and portfolio purposes.
