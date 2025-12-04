const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: [true, 'Please provide a room number'],
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Please provide a room name'],
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Please select a category']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price'],
        min: 0
    },
    capacity: {
        type: Number,
        required: [true, 'Please provide capacity'],
        min: 1
    },
    amenities: [{
        type: String
    }],
    images: [{
        type: String
    }],
    status: {
        type: String,
        enum: ['available', 'booked', 'maintenance'],
        default: 'available'
    },
    floor: {
        type: Number,
        required: true
    },
    size: {
        type: Number, // in square feet
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);
