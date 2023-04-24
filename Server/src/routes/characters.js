const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');

router.get('/:id', getCharById)

module.exports = router;