// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Notes from "./components/Notes";
import "./assets/styles/global.css"; // Ye line CSS file ko import karne ke liye hai

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {" "}
          {/* Switch ko Routes se replace kiya */}{" "}
          <Route path="/about" element={<AboutMe />} />{" "}
          <Route path="/work" element={<MyWork />} />{" "}
          <Route path="/notes" element={<Notes />} />{" "}
          <Route
            path="/"
            element={
              <div className="home-page">
                <h2> Welcome to My Portfolio! </h2>{" "}
                <p> Explore my projects, notes, and more. </p>{" "}
              </div>
            }
          />{" "}
        </Routes>{" "}
        {/* ✅ Footer Added Here */}{" "}
        <footer className="footer">
          <div className="footer-content">
            <p> ©2025 Your Name.All rights reserved. </p>{" "}
            <div className="footer-social">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                  alt="LinkedIn"
                />
              </a>{" "}
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                  alt="Twitter"
                />
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </footer>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
