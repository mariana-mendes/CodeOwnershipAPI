const express = require('express');
const router = express.Router();
const controller = require('./userController')

router.get('/:login', controller.get);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put('/:login', controller.put);
router.delete('/:login', controller.delete);
module.exports = router;