const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    createAdmin
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

router.use(protect);
router.use(admin);

router.route('/').get(getAllUsers);
router.route('/admin').post(createAdmin);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
