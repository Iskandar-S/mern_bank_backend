const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accounts');
const { ensureAuth } = require('../middleware/progress/auth');

router.get('/seed', accountController.seed);

router.get('/', accountController.get);

router.get('/:id', accountController.show);

router.post('/', accountController.create);

router.put('/:id/', accountController.update);

router.delete('/:id', accountController.close);

module.exports = router;
