import express from 'express';
import { createGroup, getGroupByName, addMember } from '../../controllers/groupsController.js';


const router = express.Router();

router.get('/:name', getGroupByName);

router.post('/', createGroup);

router.post('/:name/:email', addMember);

// router.get('/:id', getGames);

// router.put('/:id', addGameToGroup);

export { router as groupRouter };