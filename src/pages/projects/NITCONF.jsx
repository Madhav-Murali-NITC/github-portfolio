import React from 'react';
import './NITCONF.css';
import {useNavigate} from 'react-router-dom';

const NITCONF = () => {

  const navigate = useNavigate();


  const handleClick = () => { 
    navigate('/');
}


    return (
        <div className='nitconf--container'>
            <h1>NITCONF Conference Website</h1>
            <button onClick = {handleClick}>Back</button>
      
      <h2>Introduction</h2>
      <p>Welcome to the documentation for the NITCONF Conference Website! This document outlines the software requirements and API endpoints for the website, focusing on speaker login, project submission functionalities, paper management, and version history.</p>
      
      <h2>Overall Description</h2>
      
      <h3>Product Perspective</h3>
      <p>The NITCONF website enhances the conference management process by providing features for speakers to submit research papers, view their status, and manage multiple iterations of submitted papers efficiently.</p>
      
      <h3>Product Functions</h3>
      <ul>
        <li>User login using Google authentication.</li>
        <li>Abstract submission for research papers (up to 3 submissions).</li>
        <li>View status of submitted papers.</li>
        <li>Edit and view speaker details.</li>
        <li>Version history functionality for managing multiple iterations of submitted papers and associated comments.</li>
      </ul>
      
      <h2>External Interface Requirements</h2>
      
      <h3>User Interface</h3>
      <ul>
        <li>Web-based application with login screens.</li>
        <li>Dashboard for submission status.</li>
        <li>Facility to upload research papers.</li>
        <li>Deadline notification.</li>
      </ul>
      
      <h3>Software Interfaces</h3>
      <ul>
        <li>Interfaces with a relational database.</li>
        <li>Utilizes Spring Boot with REST APIs for CRUD functionality.</li>
      </ul>
      
      <h3>Communications Interfaces</h3>
      <ul>
        <li>Email notifications for registration and paper submission.</li>
        <li>Web browser communications for paper submission.</li>
      </ul>
      
      <h3>Frontend Implementation</h3>
      <p>The frontend of the NITCONF Conference Website utilizes React, HTML, CSS, and JavaScript to efficiently call backend APIs and render dynamic content. Through React's component-based approach, we ensure seamless data retrieval and presentation to users.</p>
      <p>HTML and CSS handle layout and styling, while JavaScript facilitates API interaction, enhancing user experience by displaying user profiles, submission statuses, paper details, submitted versions, and their associated comments.</p>
      
      <h2>System Features</h2>
      <p>(List of endpoints and descriptions)</p>
      
      <h2>Other Nonfunctional Requirements</h2>
      
      <h3>Performance Requirements</h3>
      <ul>
        <li>Ensure optimal response time, concurrent user handling, and scalability.</li>
        <li>Monitor database and network performance.</li>
        <li>Ensure reliability and uptime.</li>
      </ul>
      
      <h3>Safety and Security Requirements</h3>
      <ul>
        <li>Ensure data security through a dedicated database.</li>
        <li>Implement version control system for code management.</li>
      </ul>
      
      <p>This documentation provides an overview of the NITCONF Conference Website, its features, and API endpoints. For more detailed information, refer to the specific sections and endpoints mentioned above.</p>
    </div>
            
    );
};

export default NITCONF;