import sampleRoutes from './sample.route';

const router = require('express').Router();

router.use('/samples', sampleRoutes);

export default router;
