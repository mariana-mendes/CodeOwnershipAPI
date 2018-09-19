const express = require('express');
const router = express.Router();
const controller = require('./userController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:login', controller.put);
router.delete('/:login', controller.delete);
module.exports = router;