import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import profileImage from "../assets/images/your-image.jpg";
import starIcon from "../assets/images/star-icon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {" "}
      {/* ✅ Navigation Bar */}{" "}
      <nav className="navbar">
        {" "}
        {/* ✅ Desktop Menu */} <h1 className="logo"> JITHERON DONE </h1>{" "}
        <ul className="nav-links">
          <li>
            {" "}
            <Link to="/about"> About Me </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/work"> My Work </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/notes"> Notes </Link>{" "}
          </li>{" "}
        </ul>{" "}
        {/* ✅ Mobile Hamburger Icon */}{" "}
        <div className="hamburger" onClick={toggleMenu}>
          {" "}
          ☰{" "}
        </div>{" "}
        {/* ✅ Mobile Dropdown Menu */}{" "}
        {menuOpen && (
          <div className="dropdown-menu">
            <Link to="/about" onClick={toggleMenu}>
              {" "}
              About Me{" "}
            </Link>{" "}
            <Link to="/work" onClick={toggleMenu}>
              {" "}
              My Work{" "}
            </Link>{" "}
            <Link to="/notes" onClick={toggleMenu}>
              {" "}
              Notes{" "}
            </Link>{" "}
          </div>
        )}{" "}
      </nav>{" "}
      {/* ✅ Hero Section */}{" "}
      <div className="header-content">
        <div className="profile">
          <img src={profileImage} alt="Your Name" />
        </div>{" "}
        <div className="rating-section">
          <div className="rating">
            <img src={starIcon} alt="Rating" />
            <img src={starIcon} alt="Rating" />
            <img src={starIcon} alt="Rating" />
            <img src={starIcon} alt="Rating" />
            <img src={starIcon} alt="Rating" />
          </div>{" "}
          <p className="rating-text"> Rated 5 / 5 by 100 + Clients </p>{" "}
        </div>{" "}
        <div className="text-content">
          <h1>
            I 'm <span className="highlight">Your Name</span>,{" "}
          </h1>{" "}
          <h2> Product Designer </h2>{" "}
          <p> Helping brands create amazing digital experiences. </p>{" "}
        </div>{" "}
        <div className="buttons">
          <a href="#contact" className="btn btn-secondary">
            {" "}
            Hire Me{" "}
          </a>{" "}
          <a href="#portfolio" className="btn btn-secondary">
            {" "}
            Portfolio{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
