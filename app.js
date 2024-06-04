require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  redisClient  = require('./utils/redisClient');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const apiKeyRoutes = require('./routes/apiKeyRoutes');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.dbUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

redisClient.on('connect', () => {
  console.log('Redis connected');
});
app.use('/auth', authRoutes);
app.use('/files', fileRoutes);
app.use('/api-keys', apiKeyRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the KryptoniteApp API');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

