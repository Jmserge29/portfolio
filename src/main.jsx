import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/onest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactMe from "./Pages/ContactMe.jsx";
import Proyects from "./Pages/Projects.jsx";
import ProyectDetail from "./Pages/ProjectDetail.jsx";
import Experience from "./Pages/Experience.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/aboutMe" element={<ContactMe />} />
        <Route path="/projects" element={<Proyects />} />
        <Route path="/project/:id" element={<ProyectDetail/>} />
        <Route path="/experience" element={<Experience />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
