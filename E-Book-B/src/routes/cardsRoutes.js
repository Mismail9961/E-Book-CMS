const express = require('express');
const router = express.Router();
const {
  setDefaultCard,
  getAllCards,
  updateCard,
  cardResetDefaults, 
  createCard
} = require('../controllers/cardsController');

// Routes
router.post('/cards/set-defaults', setDefaultCard);
router.get('/cards', getAllCards);
router.put('/cards/:id', updateCard);
router.post('/resetcard', cardResetDefaults); 
router.post('/cards', createCard);

module.exports = router;
