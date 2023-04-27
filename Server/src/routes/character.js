const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');

router.get('/:id', getCharById);
router.get('/detail/:id', getCharById);

module.exports = router;