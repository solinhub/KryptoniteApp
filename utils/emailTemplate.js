module.exports = {
    confirmation: (email) => {
      return `
        <h1>Welcome to KryptoniteApp!</h1>
        <p>Thank you for registering, ${email}.</p>
      `;
    },
    otp: (otp) => {
      return `
        <h1>Your OTP Code</h1>
        <p>Your OTP code is ${otp}.</p>
      `;
    },
  };