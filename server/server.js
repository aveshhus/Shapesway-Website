const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const contactRoutes = require('./routes/contact');
const leadRoutes = require('./routes/leads');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shapesway';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Shapesway API is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API URL: http://localhost:${PORT}/api`);
});

module.exports = app;
