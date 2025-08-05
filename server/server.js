const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

// ✅ Connect to MongoDB
connectDB();

const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'https://mindtype.netlify.app'
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowedOrigins.includes(req.header('Origin'))) {
    corsOptions = {
      origin: true,
      credentials: true,
      optionsSuccessStatus: 200
    };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

// ✅ Apply to ALL requests (including preflight)
app.use(cors(corsOptionsDelegate));
app.options('*', cors(corsOptionsDelegate));


// ✅ Middleware
app.use(express.json());

// ✅ API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// ✅ Root route
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

// ✅ Start server
mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
