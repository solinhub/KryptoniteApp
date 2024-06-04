const nodemailer = require('nodemailer');
const config = require('../config');
const { emailTemplate } = require('../utils/emailTemplate');

// Transporter using Elastic Email's SMTP server
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525, 
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

class EmailService {
  static async sendConfirmationEmail(email) {
    const mailOptions = {
      from: process.env.SMTP_USERNAME,
      to: email,
      subject: 'Welcome to KryptoniteApp',
      html: emailTemplate.confirmation(email),
    };
    
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Confirmation email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send confirmation email to ${email}:`, error);
    }
  }

  static async sendOtpEmail(email, otp) {
    const mailOptions = {
      from: process.env.SMTP_USERNAME,
      to: email,
      subject: 'Your OTP Code',
      html: emailTemplate.otp(otp),
    };
    
    try {
      await transporter.sendMail(mailOptions);
      console.log(`OTP email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send OTP email to ${email}:`, error);
    }
  }
}

module.exports = { EmailService };
