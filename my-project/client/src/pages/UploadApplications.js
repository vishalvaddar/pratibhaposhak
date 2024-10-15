import React, { useState } from 'react';
import './UploadApplicationPage.css'; // Import CSS file for styling

const UploadApplications = () => {
  
  return (
    <div className="container mt-4">
      
      
      <div className="application-options mt-4">
        <div className="option-box">
          <a href="/new-application" className="option-link">
            <div className="icon-box">
              <i className="fas fa-plus-circle"></i>
            </div>
            <div className="text-box">New Application</div>
          </a>
        </div>
        <div className="option-box">
          <a href="/bulk-upload-applications" className="option-link">
            <div className="icon-box">
              <i className="fas fa-upload"></i>
            </div>
            <div className="text-box">Bulk Upload Applications</div>
          </a>
        </div>
      </div>

      <div className="instructions mt-4">
        <h3>Instructions</h3>
        <ul>
          <li>Ensure your file is in CSV or Excel format.</li>
          <li>Include headers: Application ID, Name, Email, etc.</li>
          <li>Review the file for errors before uploading.</li>
        </ul>
      </div>

    </div>
  );
};

export default UploadApplications;
