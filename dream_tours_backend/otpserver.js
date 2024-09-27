const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const otpStore = {};  // In-memory OTP store

// Route to send OTP
app.post('/api/send-otp', async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    otpStore[email] = otp;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gowrimanoj1530@gmail.com',
            pass: 'mhll uizy nfzl zqcu',
        },
    });

    let mailOptions = {
        from: 'gowrimanoj1530@gmail.com',
        to: email,
        subject: 'Your OTP for Dream Tours',
        text: `Your OTP is ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, otp });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send OTP' });
    }
});

// Route to send confirmation email after OTP verification
app.post('/api/send-confirmation-email', async (req, res) => {
    const { email, destination } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gowrimanoj1530@gmail.com',
            pass: 'mhll uizy nfzl zqcu',
        },
    });

    let mailOptions = {
        from: 'gowrimanoj1530@gmail.com',
        to: email,
        subject: 'Enjoy Your Trip!',
        text: `Congratulations! Enjoy your trip to ${destination}. We wish you a safe and wonderful journey!`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send confirmation email' });
    }
});

app.listen(5002, () => {
    console.log('Server is running on port 5002');
});
