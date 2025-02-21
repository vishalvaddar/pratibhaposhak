const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // CommonJS way of importing Pool

const app = express();
const port = 5000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'demodb',
  password: 'victus',
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Create a new student
app.post('/student', async (req, res) => {
  const { nmms_reg_number, student_name, father_name, gender, nmms_year, gmat_score, sat_score, dob } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO student (nmms_reg_number, student_name, father_name, gender, nmms_year, gmat_score, sat_score, dob) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [nmms_reg_number, student_name, father_name, gender, nmms_year, gmat_score, sat_score, dob]
    );
    res.status(201).json(result.rows[0]); // Send the newly created student back
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all students
app.get('/student', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM student');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update a student by ID
app.put('/student/:id', async (req, res) => {
  const { id } = req.params;
  const { nmms_reg_number, student_name, father_name, gender, nmms_year, gmat_score, sat_score, dob } = req.body;
  try {
    const result = await pool.query(
      'UPDATE student SET nmms_reg_number = $1, student_name = $2, father_name = $3, gender = $4, nmms_year = $5, gmat_score = $6, sat_score = $7, dob = $8 WHERE id = $9 RETURNING *',
      [nmms_reg_number, student_name, father_name, gender, nmms_year, gmat_score, sat_score, dob, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Student not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete a student by ID
app.delete('/student/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM student WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Student not found');
    }
    res.status(204).send(); // Successfully deleted, no content to send back
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
