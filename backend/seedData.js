const mongoose = require('mongoose');
const User = require('./models/User');
const Category = require('./models/Category');
const Room = require('./models/Room');
require('dotenv').config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected');

        // Create Admin User
        const adminExists = await User.findOne({ email: 'admin@hotel.com' });
        if (!adminExists) {
            await User.create({
                name: 'Admin User',
                email: 'admin@hotel.com',
                password: 'Admin@123',
                phone: '1234567890',
                address: 'Hotel Main Office',
                role: 'admin'
            });
            console.log('✅ Admin user created');
        }

        // Create Regular User
        const userExists = await User.findOne({ email: 'user@hotel.com' });
        if (!userExists) {
            await User.create({
                name: 'Test User',
                email: 'user@hotel.com',
                password: 'User@123',
                phone: '0987654321',
                address: 'User Address',
                role: 'user'
            });
            console.log('✅ Test user created');
        }

        // Create Categories
        const categoriesExist = await Category.countDocuments();
        if (categoriesExist === 0) {
            const categories = await Category.insertMany([
                {
                    name: 'Deluxe Room',
                    description: 'Spacious rooms with premium amenities and city views',
                    isActive: true
                },
                {
                    name: 'Suite',
                    description: 'Luxurious suites with separate living area and premium facilities',
                    isActive: true
                },
                {
                    name: 'Standard Room',
                    description: 'Comfortable rooms with essential amenities',
                    isActive: true
                },
                {
                    name: 'Executive Room',
                    description: 'Business-class rooms with work desk and high-speed internet',
                    isActive: true
                }
            ]);
            console.log('✅ Categories created');

            // Create Sample Rooms
            const roomsExist = await Room.countDocuments();
            if (roomsExist === 0) {
                await Room.insertMany([
                    {
                        roomNumber: '101',
                        name: 'Deluxe King Room',
                        category: categories[0]._id,
                        description: 'Spacious room with king-size bed, city view, and modern amenities',
                        price: 150,
                        capacity: 2,
                        floor: 1,
                        size: 350,
                        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Room Service'],
                        status: 'available',
                        isActive: true
                    },
                    {
                        roomNumber: '201',
                        name: 'Executive Suite',
                        category: categories[1]._id,
                        description: 'Luxury suite with separate living area, premium bathroom, and balcony',
                        price: 300,
                        capacity: 4,
                        floor: 2,
                        size: 600,
                        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Room Service', 'Balcony', 'Jacuzzi'],
                        status: 'available',
                        isActive: true
                    },
                    {
                        roomNumber: '102',
                        name: 'Standard Double Room',
                        category: categories[2]._id,
                        description: 'Comfortable room with double bed and essential amenities',
                        price: 80,
                        capacity: 2,
                        floor: 1,
                        size: 250,
                        amenities: ['WiFi', 'TV', 'AC'],
                        status: 'available',
                        isActive: true
                    },
                    {
                        roomNumber: '301',
                        name: 'Executive Business Room',
                        category: categories[3]._id,
                        description: 'Perfect for business travelers with work desk and high-speed internet',
                        price: 180,
                        capacity: 2,
                        floor: 3,
                        size: 400,
                        amenities: ['WiFi', 'TV', 'AC', 'Work Desk', 'Coffee Maker', 'Mini Bar'],
                        status: 'available',
                        isActive: true
                    },
                    {
                        roomNumber: '202',
                        name: 'Presidential Suite',
                        category: categories[1]._id,
                        description: 'Ultimate luxury with panoramic views and exclusive amenities',
                        price: 500,
                        capacity: 6,
                        floor: 2,
                        size: 1000,
                        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Room Service', 'Balcony', 'Jacuzzi', 'Kitchen', 'Living Room'],
                        status: 'available',
                        isActive: true
                    }
                ]);
                console.log('✅ Sample rooms created');
            }
        }

        console.log('\n================================');
        console.log('✅ Database seeded successfully!');
        console.log('================================');
        console.log('\nLogin Credentials:');
        console.log('------------------');
        console.log('Admin:');
        console.log('  Email: admin@hotel.com');
        console.log('  Password: Admin@123');
        console.log('\nUser:');
        console.log('  Email: user@hotel.com');
        console.log('  Password: User@123');
        console.log('================================\n');

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

seedData();
