import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';

// Load environment variables
dotenv.config();

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/argennet')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// API routes
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ message: err.message || 'Internal server error' });
});

const port = 3001;

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle server errors
server.on('error', (error: any) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error('Server error:', error);
  }
  process.exit(1);
}); 