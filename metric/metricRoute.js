const express = require('express');
const router = express.Router();
const controller = require('./metricController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('user/:login/project/:project_id/metric/:metric_id', controller.put);
router.delete('user/:login/project/:project_id/metric/:metric_id', controller.delete);
module.exports = router;