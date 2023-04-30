import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import MedicalHistory from "./pages/MedicalHistory/MedicalHistory";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import PatientDashboard from "./pages/PatientDashboard/PatientDashboard";
import Vitals from "./pages/Vitals/Vitals";
import Consultation from "./pages/Consultation/Consultation";
import Chats from "./pages/Chats/Chats";
import DoctorDashboard from "./pages/DoctorPages/DoctorDashboard/DoctorDashboard";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patient/*">
          <Route path="authentication" element={<Authentication />} />
          <Route path="medicalhistory" element={<MedicalHistory />} />
          <Route path="profile" element={<PatientProfile />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="vitals" element={<Vitals />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="chat" element={<Chats />} />
        </Route>
        <Route path="/doctor/*">
          <Route path="dashboard" element={<DoctorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
