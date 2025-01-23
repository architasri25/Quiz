const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Adjust as necessary
    password: 'root',     // Adjust as necessary
    database: 'quiz',     // Ensure this matches your database name
    port: 3306            // MySQL default port
});

// MySQL connection error handling
db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Signup route
app.post('/signup', (req, res) => {
    const { name, email, phone, pincode } = req.body;

    // Log received data for debugging
    console.log('Received data:', req.body);

    const sql = "INSERT INTO users (name, email, phone, pincode) VALUES (?, ?, ?, ?)";
    const values = [name, email, phone, pincode];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);  // Log the error
            return res.status(500).json({ error: err.message });  // Send detailed error back to frontend
        }
        console.log('User inserted successfully:', result);
        return res.status(200).json({ message: 'User registered successfully' });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
