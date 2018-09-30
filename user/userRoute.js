const express = require('express');
const router = express.Router();
const controller = require('./userController')

router.get('/user/:login', controller.get);
router.get('/user', controller.getAll);
router.post('/user', controller.post);
router.put('/:login', controller.put);
router.delete('/:login', controller.delete);
module.exports = router;