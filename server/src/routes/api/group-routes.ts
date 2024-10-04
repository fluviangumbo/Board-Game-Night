import express from 'express';
import { createGroup, getGroupById, addMember, } from '../../controllers/groupsController';

const router = express.Router();

router.get('/:id', getGroupById);

router.post('/', createGroup);

router.put('/:id', addMember);

export { router as groupRouter };