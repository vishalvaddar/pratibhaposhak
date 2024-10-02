// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/view-applications">View Applications</a></li>
        <li><a href="/bulk-upload">Bulk Upload Applications</a></li>
        <li><a href="/shortlisting-process">Shortlisting Process</a></li>
        <li><a href="/screening-tests">Screening Tests/Interviews</a></li>
        <li><a href="/results-management">Results Management</a></li>
        <li><a href="/reports">Reports & Analytics</a></li>
        <li><a href="/user-management">User Management</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/help-support">Help & Support</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
