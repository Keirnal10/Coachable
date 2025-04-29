import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Coachable API' });
});

// Test error route
app.get('/error', (req, res, next) => {
  next(new Error('Test error'));
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler - must be last
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app; 