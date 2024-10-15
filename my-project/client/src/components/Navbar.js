import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/">Dashboard</a></li>
        <li className="nav-item dropdown">
          <a href="/upload-applications" className="dropbtn">Upload Applications</a>
          <div className="dropdown-content">
            <a href="/new-application">New Application</a>
            <a href="/bulk-upload-applications">Bulk upload Applications</a>
          </div>
        </li>
        <li className="nav-item"><a href="/view-applications">View Applications</a></li>
        <li className="nav-item dropdown">
          <a href="/shortlisting" className="dropbtn">Shortlisting</a>
          <div className="dropdown-content">
            <a href="/create-shortlisting-criteria">Create Shortlisting Criteria</a>
            <a href="/generate-shortlist">Generate Shortlist</a>
          </div>
        </li>
        <li className="nav-item"><a href="/screening-tests">Screening Tests/Interviews</a></li>
        <li className="nav-item"><a href="/results-management">Results Management</a></li>
        <li className="nav-item"><a href="/reports">Reports & Analytics</a></li>
        <li className="nav-item"><a href="/user-management">User Management</a></li>
        <li className="nav-item"><a href="/settings">Settings</a></li>
        <li className="nav-item"><a href="/help-support">Help & Support</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
