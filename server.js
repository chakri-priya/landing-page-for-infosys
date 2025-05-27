const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let appointments = [
  {
    patient: "John Doe",
    email: "john@example.com",
    datetime: "2025-05-28T10:00:00Z"
  }
];

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

app.get('/appointment', (req, res) => {
  res.json(appointments[0]);
});

app.get('/send-reminder', (req, res) => {
  const now = new Date();
  const appointment = appointments[0];
  const appointmentTime = new Date(appointment.datetime);
  const diffHours = (appointmentTime - now) / (1000 * 60 * 60);

  if (diffHours >= 23.9 && diffHours <= 24.1) {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: appointment.email,
      subject: 'Vaccination Reminder',
      text: `Reminder: You have a vaccination appointment on ${appointmentTime}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.send('Reminder sent: ' + info.response);
    });
  } else {
    res.send('No reminders to send at this time.');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
