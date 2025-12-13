const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    checkInDate: {
        type: Date,
        required: [true, 'Please provide check-in date']
    },
    checkOutDate: {
        type: Date,
        required: [true, 'Please provide check-out date']
    },
    numberOfGuests: {
        type: Number,
        required: [true, 'Please provide number of guests'],
        min: 1
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'refunded'],
        default: 'pending'
    },
    specialRequests: {
        type: String,
        default: ''
    },
    bookingReference: {
        type: String,
        unique: true,
        required: false
    }
}, {
    timestamps: true
});

// Generate booking reference before saving
bookingSchema.pre('save', async function (next) {
    if (!this.bookingReference) {
        this.bookingReference = 'BK' + Date.now() + Math.floor(Math.random() * 1000);
    }
    next();
});

module.exports = mongoose.model('Booking', bookingSchema);
