const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const User = require('../models/userModel');
const { redisClient } = require('../utils/redisClient');
const { EmailService } = require('./emailService');
const config = require('../config');

class AuthService {
  static async register(email, password) {
    const user = new User({ email, password });
    await user.save();
    await EmailService.sendConfirmationEmail(email);
    return user;
  }

  static async login(email, password) {
    const user = await User.findOne({ email });
    if (!user || !await bcryptjs.compare(password, user.password)) {
      throw new Error('Invalid credentials');
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redisClient.set(email, otp, 'EX', 300); // OTP expires in 5 minutes
    await EmailService.sendOtpEmail(email, otp);
    return user;
  }

  static async verifyOtp(email, otp) {
    const storedOtp = await redisClient.get(email);
    if (storedOtp !== otp) {
      throw new Error('Invalid OTP');
    }
    const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: '1h' });
    return token;
  }
}

module.exports = { AuthService };