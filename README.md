# KryptoniteApp

KryptoniteApp is a Node.js backend application for managing user registration, authentication, and file uploads, designed for the fictional planet Krypton. It utilizes modern authentication methods, including email confirmation and OTP login, and allows users to upload and manage image files securely.

## Background

In the year 3030, after Earth's destruction, human civilization relocated to planet Krypton. Authentication and authorization evolved beyond usernames and passwords, now utilizing biometric details... This project is led by Kamsi, Adaeze, and Oluoma, descendants of the Genesys legacy, aiming to develop advanced technologies for Krypton.

## Features

1. *User Registration and Authentication:*
   - Users register with email confirmation.
   - Two-Factor Authentication (2FA) login using OTP via Elasticemail.
   - OTP stored using Redis for secure validation.

2. *File Upload Service:*
   - API keys generated for users to upload files.
   - Only image files allowed, stored as Base64 strings.
   - Files deleted from the system after storage.

3. *Access Control:*
   - Endpoints for uploading images require API key authentication.

4. *API Design:*
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
   - Create a .env file based on .env.example and fill in the necessary details.

4. Start the server:

bash
npm start


## Dependencies

- express: For handling HTTP requests.
- mongoose: MongoDB ORM for data modeling.
- bcrypt: For password hashing.
- jsonwebtoken: For generating JWT tokens.
- nodemailer: For sending emails.
- ioredis: Redis client library for Node.js.
- uuid: For generating unique identifiers.

## API Documentation

API documentation is available at https://app.clickup.com/9015707762/docs/8cp1j3j-35/8cp1j3j-55

## Base URL

https://kryptoniteapp.onrender.com

## Author

Linda Eze
