module.exports = {
    confirmation: function(email) {
      return `
        <h1>Welcome to KryptoniteApp</h1>
        <p>Hello, ${email}!</p>
        <p>Thank you for registering. We're excited to have you on board.</p>
      `;
    },
    otp: function(otp) {
      return `
        <h1>Your OTP Code</h1>
        <p>Your One-Time Password (OTP) is: <strong>${otp}</strong></p>
        <p>This code is valid for 5 minutes.</p>
      `;
    }
  };