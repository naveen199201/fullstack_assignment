const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/cards', cardController.createCard);
router.get('/cards', cardController.getAllCards);
router.post('/cardsearch', cardController.getCardByTitle);

module.exports = router;
