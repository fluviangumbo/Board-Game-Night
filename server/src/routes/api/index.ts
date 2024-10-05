import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { groupRouter } from './group-routes.js';
// NEED OTHER ROUTES TO GO HERE IF WE HAVE OTHER PAGES

const router = Router();

router.use('/users', userRouter);
router.use('/groups', groupRouter);

export default router;
