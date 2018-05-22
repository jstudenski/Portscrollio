const router = require('express').Router();

const sampleRoutes = require('./sample.route');

router.use('/samples', sampleRoutes);

module.exports = router;
