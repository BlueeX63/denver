import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST endpoint for contact and quote forms
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, capacity, message, source = 'Website Form' } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Lead from Synergyelectra (${source}) - ${name}`,
      text: `
You have a new submission from the Synergyelectra website:

Source: ${source}
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Capacity/Requirement: ${capacity || 'N/A'}
Message: 
${message || 'N/A'}
      `,
      html: `
        <h3>New Submission from Synergyelectra Website</h3>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Capacity/Requirement:</strong> ${capacity || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message || 'N/A'}</blockquote>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Export the app for Vercel Serverless Functions
export default app;
