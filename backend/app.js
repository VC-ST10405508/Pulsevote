const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

//Import routes
const authRoutes = require("./routes/authRoutes"); 

//Middleware first
app.use(helmet());
app.use(cors({ origin: "https://localhost:5173", credentials: true }));
app.use(express.json());

//routes
app.use("/api/auth", authRoutes); 

//Protected endpoint
const { protect } = require("./middleware/authMiddleware");
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.id}! You have accessed protected data.`,
    timestamp: new Date()
  });
});

app.get('/', (req, res) => res.send('PulseVote API running!'));

module.exports = app;