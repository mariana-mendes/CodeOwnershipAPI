const express = require('express');
const router = express.Router();
const controller = require('./classController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('user/:login/project/:project_id/author/:author_id/class/:class_id', controller.put);
router.delete('user/:login/project/:project_id/author/:author_id/class/:class_id', controller.delete);
module.exports = router;