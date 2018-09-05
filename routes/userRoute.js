const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/:login', controller.getLists);
router.get('/:login/received', controller.received);
router.get('/:login/recommended', controller.recommended);
router.get('/:login/favorite', controller.favorite);
router.put('/:login', controller.put);
router.delete('/:login', controller.delete);
module.exports = router;