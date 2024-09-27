const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com', // Updated host
  user: 'sql12733798', // Updated database user
  password: 'X1NAzuNL4H', // Updated password
  database: 'sql12733798', // Updated database name
  port: 3306, // Updated port number
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM registration WHERE user_name = ? AND password = ?';

  db.query(query, [username, password], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
