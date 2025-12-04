const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        default: 'Grand Hotel'
    },
    hotelEmail: {
        type: String,
        required: true
    },
    hotelPhone: {
        type: String,
        required: true
    },
    hotelAddress: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: 'USD'
    },
    taxRate: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    checkInTime: {
        type: String,
        default: '14:00'
    },
    checkOutTime: {
        type: String,
        default: '12:00'
    },
    cancellationPolicy: {
        type: String,
        default: 'Free cancellation up to 24 hours before check-in'
    },
    logo: {
        type: String,
        default: ''
    },
    socialMedia: {
        facebook: String,
        twitter: String,
        instagram: String,
        linkedin: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Setting', settingSchema);
