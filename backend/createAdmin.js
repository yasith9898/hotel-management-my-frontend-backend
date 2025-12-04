const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const createAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected');

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: 'admin@hotel.com' });

        if (existingAdmin) {
            console.log('Admin user already exists!');
            console.log('Email: admin@hotel.com');
            console.log('You can update the password if needed.');
            process.exit(0);
        }

        // Create admin user
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@hotel.com',
            password: 'Admin@123',
            phone: '1234567890',
            address: 'Hotel Address',
            role: 'admin'
        });

        console.log('✅ Admin user created successfully!');
        console.log('================================');
        console.log('Email: admin@hotel.com');
        console.log('Password: Admin@123');
        console.log('================================');
        console.log('You can now login with these credentials.');

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

createAdmin();
