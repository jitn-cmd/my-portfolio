import React from "react";
import profileImg from "../assets/images/profile.jpg";
import reactImg from "../assets/images/skills/react.png";
import jsImg from "../assets/images/skills/javascript.png";
import uxImg from "../assets/images/skills/uiux.png";
import "../assets/styles/AboutMe.css";

const AboutMe = () => {
    return ( <
        div className = "about-services-container" > { /* Left Section (About Me + Contact Me) */ } <
        div className = "left-section" > { /* About Me Section */ } <
        div className = "about-box" >
        <
        div className = "image-container" >
        <
        img src = { profileImg }
        alt = "Profile"
        className = "profile-img" / >
        <
        /div> <
        h2 className = "heading" > About Me < /h2> <
        p className = "description" >
        Hi, I 'm <strong>Your Name</strong>, a passionate developer with expertise in modern web technologies.
        I specialize in < strong > React, JavaScript, and UI / UX Design < /strong>. <
        /p> { /* Social Media Icons */ } <
        div className = "social-media" >
        <
        a href = "https://github.com/yourprofile"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt = "GitHub" / >
        <
        /a> <
        a href = "https://www.linkedin.com/in/yourprofile"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = "https://cdn-icons-png.flaticon.com/512/61/61109.png"
        alt = "LinkedIn" / >
        <
        /a> <
        a href = "https://twitter.com/yourprofile"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = "https://cdn-icons-png.flaticon.com/512/733/733635.png"
        alt = "Twitter" / >
        <
        /a> <
        /div> <
        /div>

        { /* Contact Box (Below About Me) */ } <
        div className = "contact-box" >
        <
        h2 className = "contact-heading" > Contact Me < /h2> <
        div className = "contact-details" >
        <
        div className = "contact-item" >
        <
        span > 📞+91 9876543210 < /span> <
        /div> <
        div className = "contact-item" >
        <
        span > 📧your.email @example.com < /span> <
        /div> <
        div className = "contact-item" >
        <
        span > 📍New Delhi, India < /span> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Right Section (Services + Skills) */ } <
        div className = "right-section" > { /* Services Box */ } <
        div className = "services-box" >
        <
        h2 className = "services-heading" > My Services < /h2> <
        div className = "services-grid" >
        <
        div className = "service-item" >
        <
        h3 > 🛠️QA Testing < /h3> <
        p > Ensuring software quality with manual & automation testing. < /p> <
        /div> <
        div className = "service-item" >
        <
        h3 > ⚡Salesforce Developer < /h3> <
        p > Building scalable and efficient Salesforce solutions. < /p> <
        /div> <
        div className = "service-item" >
        <
        h3 > 🎨UI / UX Design < /h3> <
        p > Creating visually appealing and user - friendly designs. < /p> <
        /div> <
        div className = "service-item" >
        <
        h3 > 💻Web Development < /h3> <
        p > Developing responsive and modern web applications. < /p> <
        /div> <
        /div> <
        /div>

        { /* Skills Box (Below Services) */ } <
        div className = "skills-box" >
        <
        h2 className = "skills-heading" > My Skills < /h2> <
        div className = "skills-list" >
        <
        div className = "skill-item" >
        <
        img src = { reactImg }
        alt = "React"
        className = "skill-img" / >
        <
        p > React < /p> <
        /div> <
        div className = "skill-item" >
        <
        img src = { jsImg }
        alt = "JavaScript"
        className = "skill-img" / >
        <
        p > JavaScript < /p> <
        /div> <
        div className = "skill-item" >
        <
        img src = { uxImg }
        alt = "UI/UX"
        className = "skill-img" / >
        <
        p > UI / UX Design < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default AboutMe;