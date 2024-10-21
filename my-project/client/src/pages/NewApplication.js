import React, { useState } from 'react';
import './NewApplication.css'; // Ensure this CSS file is imported

const NewApplication = () => {
  const [formData, setFormData] = useState({
    nmms_reg_number: '',
    student_name: '',
    father_name: '',
    gender: '',
    nmms_year: '',
    gmat_score: '',
    sat_score: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here, e.g., sending data to a server
  };

  return (
    <div className="container">
      <h2>New Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nmms_reg_number">NMMS Reg Number</label>
          <input type="text" id="nmms_reg_number" name="nmms_reg_number" value={formData.nmms_reg_number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="student_name">Student Name</label>
          <input type="text" id="student_name" name="student_name" value={formData.student_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="father_name">Father's Name</label>
          <input type="text" id="father_name" name="father_name" value={formData.father_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nmms_year">NMMS Year</label>
          <select id="nmms_year" name="nmms_year" value={formData.nmms_year} onChange={handleChange} required>
            <option value="">Select Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gmat_score">GMAT Score</label>
          <input type="number" id="gmat_score" name="gmat_score" value={formData.gmat_score} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="sat_score">SAT Score</label>
          <input type="number" id="sat_score" name="sat_score" value={formData.sat_score} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Submit Application</button>
      </form>
    </div>
  );
};

export default NewApplication;
