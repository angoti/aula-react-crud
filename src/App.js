import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/admin/NavBar";
import LandingPage from "./components/landingpage/LandingPage";

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<NavBar submitted={submitted} setSubmitted={setSubmitted} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
