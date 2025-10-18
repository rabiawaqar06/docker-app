const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS so frontend can communicate with backend
app.use(cors());
app.use(express.json());

// Our simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: "Hello from the other side!" 
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/hello`);
});
