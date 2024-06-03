const nodemailer = require('nodemailer');
const config = require('../config');
const emailTemplate = require('../utils/emailTemplate');

// Transporter using Elastic Email's SMTP server
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525, 
  auth: {
    user: process.env.ELASTICEMAIL_USERNAME,
    pass: process.env.ELASTICEMAIL_API_KEY
  }
});

class EmailService {
  static async sendConfirmationEmail(email) {
    const mailOptions = {
      from: process.env.ELASTICEMAIL_USERNAME,
      to: email,
      subject: 'Welcome to KryptoniteApp',
      html: emailTemplate.confirmation(email),
    };
    await transporter.sendMail(mailOptions);
  }

  static async sendOtpEmail(email, otp) {
    const mailOptions = {
      from: process.env.ELASTICEMAIL_USERNAME,
      to: email,
      subject: 'Your OTP Code',
      html: emailTemplate.otp(otp),
    };
    await transporter.sendMail(mailOptions);
  }
}

module.exports = { EmailService };