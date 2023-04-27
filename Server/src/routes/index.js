const express = require('express');
const router = express.Router();
const character = require('./character');
const handleFavorites = require('./handleFavorites');
const login = require('./login');

router.use('/character', character);
router.use('/favorites', handleFavorites);
router.use('/login', login);

module.exports = router;