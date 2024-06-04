require( 'dotenv').config();

module.exports = {
  email: {
    host: process.env.SMTP_SERVER,
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
    port: process.env.SMTP_PORT,
  },
  jwtSecret: process.env.JWT_SECRET,
  redisUrl: process.env.REDIS_URL,
  redisPassword: process.env.REDIS_PASSWORD,
  dbUri: process.env.DB_URI,
  port: process.env.PORT,
};
