import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Excel from "./components/admin/Excel";
import Leads from "./components/admin/Leads";
import NavBar from "./components/admin/NavBar";
import LandingPage from "./components/landingpage/LandingPage";

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<NavBar submitted={submitted} setSubmitted={setSubmitted} />} />
        <Route path="/admin/excel" element={<Excel />} />
        <Route path="/admin/leads" element={<Leads />} />
        {/* <Route path="/admin/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
