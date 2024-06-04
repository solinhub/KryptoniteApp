const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const User = require('../models/userModel');
const { redisClient } = require('../utils/redisClient');
const { EmailService } = require('./emailService');
const config = require('../config');
const uuidv4 = require('uuid').v4;

class AuthService {
  static async register(email, password) {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Email already in use');
      }
      const user = new User({ email, password });
      await user.save();
      const confirmation = {
        code: uuidv4(),
        expires: Date.now() + 3600000, // expires in 1 hour
      };
      await EmailService.sendConfirmationEmail(user, confirmation);
      return user;
    } catch (error) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  }

  static async login(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user || !await bcryptjs.compare(password, user.password)) {
        throw new Error('Invalid credentials');
      }
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      await redisClient.set(email, otp, 'EX', 300); // OTP expires in 5 minutes
      await EmailService.sendOtpEmail(email, otp);
      return user;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  static async verifyOtp(email, otp) {
    try {
      const storedOtp = await redisClient.get(email);
      if (storedOtp !== otp) {
        throw new Error('Invalid OTP');
      }
      const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: '1h' });
      return token;
    } catch (error) {
      throw new Error(`OTP verification failed: ${error.message}`);
    }
  }
}

module.exports = { AuthService };
