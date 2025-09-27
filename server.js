import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import generateHandler from './api/generate.js';

// Load variables from .env file (provided by Render's Secret Files)
dotenv.config();

// --- DIAGNOSTIC LOG ---
// This will run the moment the server starts on Render.
// Check your Render logs for one of these two messages.
if (process.env.API_KEY) {
    console.log("Server starting: API_KEY loaded successfully from Secret File (.env).");
} else {
    console.error("CRITICAL STARTUP ERROR: API_KEY was NOT FOUND. Please ensure you have created a 'Secret File' in your Render dashboard with the filename '.env' and the content 'API_KEY=your_actual_key'.");
}
// --------------------

const app = express();
const port = process.env.PORT || 10000;

// Since this is an ES module, __dirname is not available directly.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to set the Content-Security-Policy header for all responses.
// This is what allows your application to be embedded in an iframe in GHL.
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'frame-ancestors *');
  next();
});

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Main API route. We pass the request and response objects to our handler.
app.post('/api/generate', generateHandler);


// Serve the static frontend files (HTML, TSX -> JS, etc.)
// express.static will look for files in the specified directory.
app.use(express.static(path.join(__dirname, '')));

// For any GET request that doesn't match a static file, serve index.html.
// This is important for single-page applications like React.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});