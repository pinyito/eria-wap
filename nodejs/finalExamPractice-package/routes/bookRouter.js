const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/books/:bookId', bookController.fetchById);
router.post('/books', bookController.saveBook);
router.get('/books', bookController.searchByAuthor);

module.exports = router;