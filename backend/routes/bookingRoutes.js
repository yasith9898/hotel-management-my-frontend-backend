const express = require('express');
const router = express.Router();
const {
    getAllBookings,
    getMyBookings,
    getBooking,
    createBooking,
    updateBooking,
    cancelBooking,
    deleteBooking
} = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/auth');

router.use(protect);

router.route('/')
    .get(admin, getAllBookings)
    .post(createBooking);

router.get('/my-bookings', getMyBookings);

router.route('/:id')
    .get(getBooking)
    .put(admin, updateBooking)
    .delete(admin, deleteBooking);

router.put('/:id/cancel', cancelBooking);

module.exports = router;
