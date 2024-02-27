import React from 'react';
import {Link } from 'react-router-dom';

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
                    <p>The movie recommendation system was designed and implemented using Python's Pandas and Scikit-learn libraries. Utilizing a dataset comprising information on 5000 movies, including titles, genres, and synopses, the system leverages the bag-of-words technique for text analysis. Stringent preprocessing steps were applied to the movie summaries, including the removal of punctuation, standardization of text to lowercase, and the elimination of stopwords. Through cosine similarity calculations between bag-of-words vectors, the system accurately recommends the top 5 most relevant movies based on a given movie name input.</p>
                </li>
                <li>
                <Link to ='/ecommerce'><h1>E-Commerce Platform Documentation<label>[click for detalis]</label></h1></Link>
                </li>
                <li>
                <Link to ='/nitconf'><h1>NITCONF: Author Paper Submission Application<label>[click for detalis]</label></h1></Link>
                </li>
                <li>
                <Link to ='/rdbms'><h1>NITCbase: RDBMS Implementation Project<label>[click for detalis]</label></h1></Link>
                </li>
                <li>
                    <h2>Ragam website</h2>
                    <p>A very basic landing website including a hero section and other components on a single page.Makes use of React,CSS,and explores CSS animations.</p>
                    <a href = 'https://ragamnitc.netlify.app/'>Visit here</a>
                </li>
                <li>
                    <h2>AV website</h2>
                    <p>The AV website project incorporates a unique 3D spline model that synchronizes its pulsating animation with the club's latest playlist retrieved through the Spotify API. By accessing real-time playlist data, the website dynamically selects and plays songs from the playlist. Additionally, it utilizes the Spotify API to fetch tempo information from the currently playing song. This tempo data is then used to adjust the pulsating rhythm of the 3D model, ensuring that its animation matches the BPM (beats per minute) of the song, thereby creating a visually captivating experience for users.</p>
                </li>
            </ol>

        </div>
        <div className = 'contact'>
            <h1>Contact</h1>
            <ul>
            <li><a href = 'https://github.com/Madhav-Murali-NITC'>Github</a></li>
            <li><a href = 'https://www.linkedin.com/in/madhav-murali-nitc/'>Linkedin</a></li>
            </ul>
            <p>Email:  madhav_b210027cs@nitc.ac.in</p> 

            
        </div>
        </div>
    );
};

export default Landing;