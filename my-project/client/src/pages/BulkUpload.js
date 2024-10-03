// src/pages/BulkUploadPage.js
import React, { useState } from 'react';

const BulkUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

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
    };

    return (
        <div className="container mt-4">
            <h2>Upload Applications in Bulk</h2>
            <p>Use the form below to upload a CSV or Excel file containing multiple student applications.</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="file-upload" className="btn btn-primary">
                        Choose File
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        name="file"
                        accept=".csv, .xls, .xlsx"
                        className="d-none"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Upload Applications</button>
            </form>
            {message && <div className="mt-3">{message}</div>}
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

export default BulkUpload;
