const express = require('express');
const router = express.Router();
const controller = require('./projectController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id_project', controller.put);
router.delete('/:id_project', controller.delete);

module.exports = router;