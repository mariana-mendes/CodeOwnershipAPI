const express = require('express');
const router = express.Router();
const controller = require('./projectController')

router.get('/', controller.getAll);
router.get('/:project_id', controller.get);
router.post('/', controller.post);
router.put('user/:login/project/:project_id', controller.put);
router.delete('user/:login/project/:project_id', controller.delete);

module.exports = router;