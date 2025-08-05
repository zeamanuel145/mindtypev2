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

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://mindtype.netlify.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ✅ Preflight support

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
  console.log(`Server running on port ${PORT}`);
  app.listen(PORT);
});
