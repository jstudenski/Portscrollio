import { findAll } from '../../controllers/sample.controller';

const router = require('express').Router();

router.route('/')
  .get(findAll);

export default router;
