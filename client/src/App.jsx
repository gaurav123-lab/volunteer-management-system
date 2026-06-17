import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import VolunteerForm from "./pages/VolunteerForm";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Registration />} />

          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/volunteer" element={<VolunteerForm />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
