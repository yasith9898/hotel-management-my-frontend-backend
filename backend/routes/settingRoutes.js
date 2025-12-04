const express = require('express');
const router = express.Router();
const {
    getSettings,
    updateSettings
} = require('../controllers/settingController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
    .get(getSettings)
    .put(protect, admin, updateSettings);

module.exports = router;
