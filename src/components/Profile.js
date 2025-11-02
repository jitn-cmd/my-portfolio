// src/components/Profile.js
import React, { useState } from 'react';
import './Profile.css'; // (You can style it separately)

const Profile = () => {
    const [headerImage, setHeaderImage] = useState(null);
    const [project, setProject] = useState({
        title: '',
        description: '',
        images: []
    });

    // Handle header image change
    const handleHeaderChange = (e) => {
        setHeaderImage(URL.createObjectURL(e.target.files[0]));
    };

    // Handle project image uploads
    const handleProjectImages = (e) => {
        const files = Array.from(e.target.files);
        setProject({...project, images: files.map(file => URL.createObjectURL(file)) });
    };

    return ( <
        div className = "profile-container" >
        <
        h2 > Profile Control Panel < /h2>

        { /* Header Photo Section */ } <
        div className = "profile-section" >
        <
        h3 > Header Photo < /h3> <
        input type = "file"
        accept = "image/*"
        onChange = { handleHeaderChange }
        /> { headerImage && < img src = { headerImage }
            alt = "Header Preview"
            className = "header-preview" / > } <
        /div>

        { /* Upload New Project Section */ } <
        div className = "profile-section" >
        <
        h3 > Upload New Project < /h3> <
        input type = "text"
        placeholder = "Project Title"
        value = { project.title }
        onChange = {
            (e) => setProject({...project, title: e.target.value }) }
        /> <
        textarea placeholder = "Project Description"
        value = { project.description }
        onChange = {
            (e) => setProject({...project, description: e.target.value }) }
        /> <
        input type = "file"
        accept = "image/*"
        multiple onChange = { handleProjectImages }
        /> <
        div className = "preview-grid" > {
            project.images.map((img, index) => ( <
                img key = { index }
                src = { img }
                alt = { `Preview ${index}` }
                />
            ))
        } <
        /div> <
        button className = "btn" > Submit Project < /button> <
        /div>

        { /* Recent Projects (Static Placeholder for now) */ } <
        div className = "profile-section" >
        <
        h3 > Recent Projects < /h3> <
        div className = "project-list" > {
            [1, 2, 3].map((num) => ( <
                div key = { num }
                className = "project-card" >
                <
                img src = { `https://via.placeholder.com/150?text=Project+${num}` }
                alt = { `Project ${num}` }
                /> <
                h4 > Project Title { num } < /h4> <
                p > Short description
                for project { num }... < /p> <
                button className = "btn" > Explore < /button> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
};

export default Profile;