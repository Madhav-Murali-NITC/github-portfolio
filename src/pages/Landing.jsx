import React from 'react';
import {Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <div className='header'>
                <h1>Madhav Murali</h1>  
                <h3>Computer Science and Engineering Student</h3>
                <h3>Age 21</h3>
                <h3>B.Tech at National Institute of Technology,Calicut</h3>
            </div>
        <div className='about-me'>
            <h1>About me</h1>
            <p>Enthusiastic Computer Science student at NIT Calicut specializing in front-end and full-stack development, proficient in a range of technologies including React, CSS, HTML, Node.js, Express, MySQL, and MongoDB. Experienced in crafting intuitive user interfaces and building robust back-end solutions. Additionally, possess a solid foundation in AI/ML concepts and algorithms, bringing valuable expertise to projects. Eager to contribute to cutting-edge developments at the intersection of front-end, back-end, and AI/ML. </p>
        </div>
        <div className='projects'>
            <h1>Projects</h1>
            <ol>
                <li>
                    <h2>Movie Recommender System</h2>
                    <p>
A movie recommendation system, implemented in Python using Pandas and Scikit-learn libraries, analyzes a dataset of 5000 movies' information, leveraging the bag-of-words technique for text analysis. By preprocessing movie summaries and employing cosine similarity calculations, it accurately recommends the top 5 most relevant movies based on user input.</p>
                </li>
                <li>
                <h2>E-Commerce Platform </h2><p> Project using React JS,express,MySQL,Node Js,HTML and CSS.Overview of our e-commerce platform, highlighting key features such as the cart system, product management, and role-based authentication.</p><Link to ='/ecommerce'><label>[click for details]</label></Link><button onClick = {()=>{window.location.href = 'https://github.com/Madhav-Murali-NITC/E-Commerce-Website'}}>Repository</button>
                </li>
                <li>
                    <h2>NITCONF Author Paper Submission Application</h2><p>Project using React JS,HTML,CSS,Spring,Swagger,Git Versions and MySQL.Detailed guide to the NITCONF Conference Website, covering features like user authentication, paper submission, and version history.</p><Link to ='/nitconf'><label>[click for details]</label></Link><button onClick = {()=>{window.location.href = 'https://github.com/Madhav-Murali-NITC/SE_LAB_Team8_NITCONF'}}>Repository</button>
                </li>
                <li>
                <h2>NITCbase: RDBMS Implementation </h2><p>Developed a feature-rich RDBMS in C++, simulating SQL functionality including CREATE, DROP, ALTER, INSERT, SELECT, PROJECT, and JOIN
operations,as well as B+ indexing and a Cache System using OOPS and DBMS concepts</p><Link to ='/rdbms'><label>[click for details]</label></Link><button onClick = {()=>{window.location.href = 'https://github.com/Madhav-Murali-NITC/RDBMS-PROJECT-final'}}>Repository</button>
                </li>
                <li>
                    <h2>Ragam website</h2>
                    <p>A landing page including a hero section and other components on a single page. Makes use of React,CSS,and explores CSS animations.</p>
                    <a href = 'https://ragam-inductions.onrender.com/'><label>[Visit here]</label></a>
                    <button onClick = {()=>{window.location.href = 'https://github.com/Madhav-Murali-NITC/ragam-page'}}>Repository</button>
                </li>
                <li>
                    <h2>AV website</h2>
                    <p>The AV website project integrates a dynamic 3D spline model synchronized with the latest club playlist fetched through the Spotify API. Real-time song selection and tempo adjustment create a visually captivating experience, with the animation pulsating in sync with the BPM of the currently playing song.</p>
                    <button onClick = {()=>{window.location.href = 'https://github.com/Madhav-Murali-NITC/Spline-scroll-Spotify-API'}}>Repository</button>
                </li>
            </ol>

        </div>
        <div className = 'contact'>
            <h1>Contact & Links</h1>
            <p>Email:  madhav_b210027cs@nitc.ac.in</p> 
            <p>Phone : +91 8861796877</p>
            <ul>
            <li><a href = 'https://github.com/Madhav-Murali-NITC'>Github</a></li>
            <li><a href = 'https://www.linkedin.com/in/madhav-murali-nitc/'>Linkedin</a></li>
            </ul>
            

            
        </div>
        </div>
    );
};

export default Landing;