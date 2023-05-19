const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package

const app = express();

app.use(cors()); // Enable CORS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to MongoDB using mongoose
mongoose.connect('mongodb+srv://adithyacse21:9lMdsKbeKkFDQnhk@cluster0.iuposea.mongodb.net/test')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// API endpoint for getting all users
app.get('/message', (req, res) => {
  res.json({ message: "Hello from server" });
});

const PORT = 2343;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
