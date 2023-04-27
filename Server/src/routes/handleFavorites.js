const express = require('express');
const router = express.Router();
const { postFav, deleteFav } = require('../controllers/handleFavorites');

router.post('/', postFav);

router.delete('/:id', deleteFav);

module.exports = router;