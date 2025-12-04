const express = require('express');
const router = express.Router();
const {
    getAllRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom,
    getAvailableRooms
} = require('../controllers/roomController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
    .get(getAllRooms)
    .post(protect, admin, createRoom);

router.get('/available', getAvailableRooms);

router.route('/:id')
    .get(getRoom)
    .put(protect, admin, updateRoom)
    .delete(protect, admin, deleteRoom);

module.exports = router;
