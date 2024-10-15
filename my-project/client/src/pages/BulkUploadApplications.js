import React, { useState } from 'react';
import './BulkUploadApplications.css'; // Ensure this CSS file is imported

const BulkUploadApplications = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload file');
      }
      const data = await response.json();
      setMessage(data.message || 'File uploaded successfully');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
    setIsLoading(false);
  };

  return (
    <div className="bulk-upload-container">
      <h2>Bulk Upload Applications</h2>
      <p>Use the form below to upload a CSV or Excel file containing multiple student applications.</p>
      
      {message && <div className="alert alert-info mt-3">{message}</div>}
      
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="file-upload" className="form-label mt-4">Upload File</label>
          <input
            type="file"
            id="file-upload"
            className="form-control"
            onChange={handleFileChange}
            accept=".csv, .xlsx"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>
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

export default BulkUploadApplications;
