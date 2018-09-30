const express = require('express');
const router = express.Router();
const controller = require('./metricController')

const resource = '/project/:project_id/metric/:metric_id';

router.get(`${resource}`, controller.get);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put(`${resource}`, controller.put);
router.delete(`${resource}`, controller.delete);
module.exports = router;