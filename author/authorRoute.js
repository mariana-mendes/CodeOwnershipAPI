const express = require('express');
const router = express.Router();
const controller = require('./authorController')

const resource = '/project/:project_id/author/:author_id';

router.get(`${resource}`, controller.get);
router.get(`${resource}`, controller.getAll);
router.post('/', controller.post);
router.put(`${resource}`, controller.put);
router.delete(`${resource}`, controller.delete);

module.exports = router;