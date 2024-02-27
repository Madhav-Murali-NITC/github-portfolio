import React from 'react';

const RDBMS = () => {
    return (
        <div className="rdbms-project">
      <h1>NITCbase: RDBMS Implementation Project</h1>
      <h2>Introduction</h2>
      <p>NITCbase is a Relational Database Management System (RDBMS) implementation project aimed at helping undergraduate students grasp the design and data structures of an elementary RDBMS by building one themselves. The project provides a step-by-step implementation roadmap, detailed documentation with tutorials, and complete design and specification of the RDBMS and its various component subsystems.</p>
      
      <h2>About</h2>
      <p>NITCbase follows an eight-layer design, encompassing the basic capabilities of a standard RDBMS, including table creation and deletion, record insertion, selection queries, and indexing using B+ Trees. The implemented RDBMS supports elementary SQL queries such as create, drop, alter, insert, select, project, equi-join, and indexing queries like create index and drop index. However, concurrency support is currently not included.</p>
      
      <h2>Components Overview</h2>
      <p>The eight layers of NITCbase are as follows:</p>
      <ol>
        <li>Physical Layer</li>
        <li>Buffer Layer</li>
        <li>B+ Tree Layer</li>
        <li>Block Access Layer</li>
        <li>Cache Layer</li>
        <li>Algebra Layer</li>
        <li>Schema Layer</li>
        <li>Frontend Interface</li>
      </ol>
      
      <h2>Command-Line Interfaces</h2>
      <p>NITCbase provides two command-line interfaces:</p>
      <ul>
        <li>Frontend Interface</li>
        <li>XFS Interface</li>
      </ul>
      
      <h2>Provided Resources</h2>
      <p>The project assumes a Unix/Linux environment and provides resources to get started, including:</p>
      <ul>
        <li>XFS Interface for disk access</li>
        <li>Disk class implementation</li>
        <li>Class definitions for intermediate layers</li>
        <li>Partial implementation of the Frontend Interface</li>
        <li>Detailed documentation with specifications, tutorials, and design details</li>
        <li>A roadmap for step-by-step implementation</li>
      </ul>
      
      <h2>Functional Description of Layers</h2>
      <p>Each layer of NITCbase serves specific functionalities:</p>
      <ol>
        <li><strong>Frontend User Interface Sub-layer</strong>: Interacts with users, translating SQL-like queries into calls to appropriate functions in the Frontend Programming Interface Sub-layer.</li>
        <li><strong>Frontend Programming Interface Sub-layer</strong>: Redirects calls to lower layers, handling complex queries and directing DDL and DML commands to corresponding layers.</li>
        <li><strong>Schema Layer</strong>: Manages DDL commands for creating, deleting, and modifying relations and attributes.</li>
        <li><strong>Algebra Layer</strong>: Processes DML commands such as Insert, Select, Project, and Join.</li>
        <li><strong>Cache Layer</strong>: Implements runtime memory data structures for managing open relations' data and metadata.</li>
        <li><strong>Block Access Layer</strong>: Implements fundamental data manipulation operations like select and project.</li>
        <li><strong>B+ Tree Layer</strong>: Handles indexing operations using B+ trees, simplifying data retrieval and insertion for indexed queries.</li>
        <li><strong>Buffer Layer</strong>: Manages a disk buffer to cache disk blocks, optimizing disk access and providing a clean interface to higher layers.</li>
        <li><strong>Physical Layer</strong>: Handles low-level disk access routines, facilitating reading and writing data blocks.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>NITCbase offers a comprehensive learning experience for implementing an RDBMS from scratch, providing students with practical insights into database design and data structures.</p>
    </div>
    )
       
};

export default RDBMS;