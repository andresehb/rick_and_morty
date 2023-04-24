const express = require('express');
const router = express.Router();
const { getFav } = require('../controllers/favorites');

router.get('/:id', getFav)

module.exports = router;