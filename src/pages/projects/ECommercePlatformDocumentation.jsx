import React from 'react';
import './ECommerce.css';
import { useNavigate } from 'react-router-dom';

const ECommercePlatformDocumentation = () =>{
  const navigate = useNavigate();


  const handleClick = () => { 
    navigate('/');
}
  
        return (
            <div className="documentation">
                 <h1>E-Commerce Platform Documentation</h1>
                 <button onClick = {handleClick}>Back</button>
      
      <h2>Problem Statement</h2>
      <p>In the rapidly evolving landscape of online commerce, businesses face the challenge of providing a seamless and engaging shopping experience for users while ensuring efficient management of products and orders. Furthermore, maintaining data integrity, scalability, and security poses significant challenges in the development of e-commerce platforms.</p>
      
      <h2>Solution Overview</h2>
      <p>To address these challenges, we have developed a comprehensive e-commerce platform leveraging modern web technologies and robust database design principles. Our solution focuses on delivering a user-friendly interface, efficient data management, and stringent security measures.</p>
      
      <h2>Architecture Overview</h2>
      <p>Our project primarily uses React for the frontend, Express and Node.js for the backend, MySQL for database management, and standard web technologies (HTML, CSS, JavaScript) for user interface design and interactivity.</p>
      
      <h2>Database Design</h2>
      <p>Structured according to the principles of the third normal form (3NF). This design paradigm ensures optimal data organization, minimizes redundancy, and enhances scalability.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Cart System: A robust cart management system enabling users to add, remove, and modify items in their shopping carts seamlessly.</li>
        <li>Product Management: Comprehensive tools for administrators to effortlessly add, update, and remove products from the platform, ensuring a dynamic and up-to-date catalog.</li>
        <li>Role-based Authentication: A sophisticated authentication mechanism that distinguishes between user roles (e.g., regular user, admin), ensuring secure access control and privilege management.</li>
        <li>Order Management System: A personalized platform enabling individual users to seamlessly checkout items within their cart, while offering diverse payment methods for a tailored experience.</li>
      </ul>
      
      <h2>Backend Routes Overview</h2>
      <p>(List of backend routes and descriptions)</p>
      
      <h2>Overall Design</h2>
      <ul>
        <li>The backend follows a modular design, with each route grouped into separate files (auth.js, cart.js, orders.js, products.js).</li>
        <li>Utilizes Express.js to create and manage routes.</li>
        <li>Implements JWT-based authentication for user sessions.</li>
        <li>Uses bcrypt for password hashing and validation.</li>
        <li>Employs MySQL queries to interact with the database.</li>
        <li>Provides RESTful endpoints for user authentication, cart management, order processing, and product management.</li>
      </ul>
            </div>
              
        );
    
}

export default ECommercePlatformDocumentation;
