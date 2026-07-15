import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL Database connection pool
// Railway provides the DATABASE_URL environment variable automatically
// when you provision a PostgreSQL service in your project.
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Enable CORS if needed
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Serve static files from the React Vite app (usually in the 'dist' folder)
app.use(express.static(path.join(__dirname, 'dist')));

// Example API endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Example Database Check Endpoint
app.get('/api/db-status', async (req, res) => {
  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ status: 'error', message: 'DATABASE_URL is not set. Please add a PostgreSQL service in Railway.' });
  }
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'ok', message: 'Database connection successful!', time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Database connection failed', error: error.message });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
