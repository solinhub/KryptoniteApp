require( 'dotenv').config();

module.exports = {
  email: {
    host: process.env.EMAIL_HOST,
    user: process.env.EMAIL_USER,
    pass: process.env.ELASTICEMAIL_API_KEY,
  },
  jwtSecret: process.env.JWT_SECRET,
  redisUrl: process.env.REDIS_URL,
  redisPassword: process.env.REDIS_PASSWORD,
  dbUri: process.env.DB_URI,
  port: process.env.PORT,
};
