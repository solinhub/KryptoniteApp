# KryptoniteApp

KryptoniteApp is a Node.js backend application for managing user registration, authentication, and file uploads, designed for the fictional planet Krypton. It utilizes modern authentication methods, including email confirmation and OTP login, and allows users to upload and manage image files securely.

## Background

In the year 3030, after Earth's destruction, human civilization relocated to planet Krypton. Authentication and authorization evolved beyond usernames and passwords, now utilizing biometric details... This project is led by Kamsi, Adaeze, and Oluoma,descendants of the Genesys legacy, oh and Linda, a new generation genie aiming to develop advanced technologies for Krypton.

## Features

1. **User Registration and Authentication:**
   - Users register with email confirmation.
   - Two-Factor Authentication (2FA) login using OTP via Elasticemail.
   - OTP stored using Redis for secure validation.

2. **File Upload Service:**
   - API keys generated for users to upload files.
   - Only image files allowed, stored as Base64 strings.
   - Files deleted from the system after storage.

3. **Access Control:**
   - Endpoints for uploading images require API key authentication.

4. **API Design:**
   - Follows RESTful API principles.
   - Utilizes class-based services and controllers.

## Installation

1. Clone the repository:

bash
git clone https://github.com/solinhub/KryptoniteApp
cd KryptoniteApp


2. Install dependencies:

bash
npm install


3. Set up environment variables:
   - Create a `.env` file based on `.env.example` and fill in the necessary details.

4. Start the server:

bash
npm start


## Environment Variables

Make sure to set the following environment variables in your `.env` file:


PORT=3000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ELASTICEMAIL_USERNAME=your_elasticemail_username
ELASTICEMAIL_API_KEY=your_elasticemail_api_key
REDIS_URL=your_redis_url
REDIS_PASSWORD=your_redis_password


## Dependencies

- `express`: For handling HTTP requests.
- `mongoose`: MongoDB ORM for data modeling.
- `bcryptjs`: For password hashing.
- `jsonwebtoken`: For generating JWT tokens.
- `nodemailer`: For sending emails.
- `ioredis`: Redis client library for Node.js.
- `uuid`: For generating unique identifiers.
- `dotenv`: For loading environment variables from `.env` files.

## API Documentation

API documentation is available at [ClickUp Docs](https://app.clickup.com/9015707762/docs/8cp1j3j-35/8cp1j3j-55).

## Base URL

All API endpoints are available at the base URL: `https://kryptoniteapp-pk53.onrender.com`

## API Endpoints

### User Registration

- **Endpoint**: `POST /auth/register`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body**:
  json
  {
    "email": "testuser@example.com",
    "password": "yourpassword"
  }
  

### User Login

- **Endpoint**: `POST /auth/login`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body**:
  json
  {
    "email": "testuser@example.com",
    "password": "yourpassword"
  }
  

### OTP Verification

- **Endpoint**: `POST /auth/verify-otp`
- **Headers**:
  - `Content-Type`: `application/json`
- **Body**:
  json
  {
    "email": "testuser@example.com",
    "otp": "123456"
  }
  

### File Upload (Requires API Key)

- **Endpoint**: `POST /files/upload`
- **Headers**:
  - `Content-Type`: `application/json`
  - `x-api-key`: `your_api_key`
- **Body**:
  json
  {
    "file": "base64_encoded_image_string"
  }
  

## Author

Linda

## Conclusion

With these updates, you should be able to run and test the KryptoniteApp successfully. The application supports user registration with email confirmation, 2FA using OTP for login, and file uploads requiring API key authentication. Follow the provided instructions to set up the environment variables and start the server.

If you encounter any issues or have questions, refer to the API documentation or contact the project author.
