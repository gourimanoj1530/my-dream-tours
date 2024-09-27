const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json()); // Use express's built-in JSON parser

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com', // Updated host
  user: 'sql12733798', // Updated database user
  password: 'X1NAzuNL4H', // Updated password
  database: 'sql12733798', // Updated database name
  port: 3306, // Updated port number
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Registration endpoint
app.post('/register', (req, res) => {
  const {
    first_name,
    last_name,
    user_name,
    age,
    dob,
    gender,
    adr_line_1,
    adr_line_2,
    city_name,
    state,
    pincode,
    mobile_no,
    email,
    password,
  } = req.body;

  // Check if user already exists
  const checkUserQuery = 'SELECT * FROM registration WHERE user_name = ? OR mobile_no = ?';
  db.query(checkUserQuery, [user_name, mobile_no], (err, results) => {
    if (err) {
      console.error('Error checking user existence:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      // User already exists
      return res.status(400).json({ message: 'User already exists. Redirecting to login page.' });
    }

    // Insert new user into the database
    const insertQuery = `
      INSERT INTO registration (
        first_name, last_name, user_name, age, dob, gender, adr_line_1, adr_line_2, 
        city_name, state, pincode, mobile_no, email, password
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(insertQuery, [
      first_name,
      last_name,
      user_name,
      age,
      dob,
      gender,
      adr_line_1,
      adr_line_2,
      city_name,
      state,
      pincode,
      mobile_no,
      email,
      password,
    ], (err) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ message: 'Error inserting data' });
      }

      // Send email confirmation
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gowrimanoj1530@gmail.com', // Your email
          pass: 'mhll uizy nfzl zqcu', // Your email password
        },
      });

      const mailOptions = {
        from: 'gowrimanoj1530@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: `Hello ${first_name},\n\nYou have successfully registered. Welcome to Dream Tours!\n\nBest regards,\nDream Tours Team`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ message: 'Error sending email' });
        }

        console.log('Email sent: ' + info.response);
        res.status(201).json({ message: 'Registration successful, email sent!' });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
