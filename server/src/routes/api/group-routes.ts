import express from 'express';
import { createGroup, getGroupByName, addMember, getGroups } from '../../controllers/groupsController.js';

const router = express.Router();

router.get('/', getGroups);

router.get('/:name', getGroupByName);

router.post('/', createGroup);

router.post('/:name/:email', addMember);

export { router as groupRouter };