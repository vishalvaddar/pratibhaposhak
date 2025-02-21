import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './ViewApplication.css'; // Make sure the CSS is correctly imported

const ViewApplication = () => {
  const [students, setStudents] = useState([]);
  const [nmmsRegNumber, setNmmsRegNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [gender, setGender] = useState('');
  const [nmmsYear, setNmmsYear] = useState('');
  const [gmatScore, setGmatScore] = useState('');
  const [satScore, setSatScore] = useState('');
  const [dob, setDob] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/student');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const studentData = {
      nmms_reg_number: nmmsRegNumber,
      student_name: studentName,
      father_name: fatherName,
      gender: gender,
      nmms_year: nmmsYear,
      gmat_score: gmatScore,
      sat_score: satScore,
      dob: dob,
    };

    if (editMode) {
      await axios.put(`http://localhost:5000/student/${currentId}`, studentData);
      setEditMode(false);
      setCurrentId(null);
    }

    // Clear input fields after update
    setNmmsRegNumber('');
    setStudentName('');
    setFatherName('');
    setGender('');
    setNmmsYear('');
    setGmatScore('');
    setSatScore('');
    setDob('');
    fetchStudents();
  };

  const handleEdit = (student) => {
    setNmmsRegNumber(student.nmms_reg_number);
    setStudentName(student.student_name);
    setFatherName(student.father_name);
    setGender(student.gender);
    setNmmsYear(student.nmms_year);
    setGmatScore(student.gmat_score);
    setSatScore(student.sat_score);
    setDob(student.dob);
    setEditMode(true);
    setCurrentId(student.id);
  };

  const handleDelete = async (studentId) => {
    await axios.delete(`http://localhost:5000/student/${studentId}`);
    fetchStudents();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Details</h1>

        {/* Form for updating student information */}
        {editMode && (
          <form onSubmit={handleUpdate} className="edit-form">
            <input
              className="input-field"
              type="text"
              placeholder="NMMS Reg Number"
              value={nmmsRegNumber}
              onChange={(e) => setNmmsRegNumber(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Father's Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="NMMS Year"
              value={nmmsYear}
              onChange={(e) => setNmmsYear(e.target.value)}
            />
            <input
              className="input-field"
              type="number"
              placeholder="GMAT Score"
              value={gmatScore}
              onChange={(e) => setGmatScore(e.target.value)}
            />
            <input
              className="input-field"
              type="number"
              placeholder="SAT Score"
              value={satScore}
              onChange={(e) => setSatScore(e.target.value)}
            />
            <input
              className="input-field"
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              Update Student
            </button>
          </form>
        )}

        {/* Table for displaying students */}
        <table className="student-table">
          <thead>
            <tr>
              <th>NMMS Reg Number</th>
              <th>Student Name</th>
              <th>Father's Name</th>
              <th>Gender</th>
              <th>NMMS Year</th>
              <th>GMAT Score</th>
              <th>SAT Score</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.nmms_reg_number}</td>
                <td>{student.student_name}</td>
                <td>{student.father_name}</td>
                <td>{student.gender}</td>
                <td>{student.nmms_year}</td>
                <td>{student.gmat_score}</td>
                <td>{student.sat_score}</td>
                <td>{student.dob}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(student)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default ViewApplication;
