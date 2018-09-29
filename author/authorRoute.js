const express = require('express');
const router = express.Router();
const controller = require('./authorController')

router.get('/project/:project_id/author/:author_id', controller.get);
router.post('/', controller.post);
router.put('user/:login/project/:project_id/author/:author_id', controller.put);
router.delete('user/:login/project/:project_id/author/:author_id', controller.delete);
module.exports = router;