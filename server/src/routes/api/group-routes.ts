import express from 'express';
import { createGroup, getGroupById, addMember, getGames, addGameToGroup } from '../../controllers/groupsController.js';


const router = express.Router();

router.get('/:id', getGroupById);

router.post('/', createGroup);

router.put('/:id', addMember);

router.get('/:id', getGames);

router.put('/:id', addGameToGroup);

export { router as groupRouter };