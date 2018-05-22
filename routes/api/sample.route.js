const router = require('express').Router();
const sampleController = require('../../controllers/sample.controller');

router.route('/')
  .get(sampleController.findAll);

module.exports = router;
