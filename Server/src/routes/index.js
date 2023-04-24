const express = require('express');
const router = express.Router();
const characters = require('./characters');
const favorites = require('./favorites');

router.use('/characters', characters);
router.use('/favorites', favorites);

module.exports = router;