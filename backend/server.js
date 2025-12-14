const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
const result = dotenv.config({ path: './.env', override: true });
if (result.error) {
    console.log('DOTENV ERROR:', result.error);
}

console.log('-----------------------------------');
console.log('STARTING SERVER');
console.log('DEBUG: MONGODB_URI is:', process.env.MONGODB_URI);
console.log('-----------------------------------');

// Connect to database
connectDB();
console.log('DEBUG: PORT is:', process.env.PORT);

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/rooms', require('./routes/roomRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/settings', require('./routes/settingRoutes'));

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Hotel Management API',
        version: '1.0.0'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});

const PORT = process.env.PORT || 5000;

// Only start server if running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
}

module.exports = app;
