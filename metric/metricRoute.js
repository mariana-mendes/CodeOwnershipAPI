const express = require('express');
const router = express.Router();
const controller = require('./metricController')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:project_id/metric', controller.put);
router.delete('/:project_id/metric', controller.delete);
module.exports = router;