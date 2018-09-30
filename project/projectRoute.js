const express = require('express');
const router = express.Router();
const controller = require('./projectController')

const resource = '/:project_id/';

router.get('/', controller.getAll);
router.get(`${resource}`, controller.get);
router.post('/', controller.post);
router.put(`${resource}`, controller.put);
router.delete(`${resource}`, controller.delete);

module.exports = router;