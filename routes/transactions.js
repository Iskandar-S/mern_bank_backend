const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');

router.get('/seed', transactionController.seed);

router.get('/', transactionController.get);

router.get('/show', transactionController.show);

router.post('/', transactionController.create);

router.put('/', transactionController.edit);

module.exports = router;
