const express = require('express');
const router = express.Router();
const controller = require('./classController')

const resource = '/project/:project_id/class/:class_id'

router.get(`${resource}`, controller.get);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put(`${resource}`, controller.put);
router.delete(`${resource}`, controller.delete);
module.exports = router;