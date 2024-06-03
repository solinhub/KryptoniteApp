const { AuthService } = require('../services/authService');

class AuthController {
  static async register(req, res) {
    try {
      const { email, password } = req.body;
      await AuthService.register(email, password);
      res.status(200).send('Registration successful, check your email for confirmation.');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      await AuthService.login(email, password);
      res.status(200).send('OTP sent to your email.');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async verifyOtp(req, res) {
    try {
      const { email, otp } = req.body;
      const token = await AuthService.verifyOtp(email, otp);
      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = { AuthController };