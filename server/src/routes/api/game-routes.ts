import express from 'express';
import { getName } from '../../controllers/gamesController.js';

const router = express.Router();

router.get('/', getName);

// router.get('/', hotGames);

// router.get('/:id', getDetails);

// router.put for adding game ot group? would need to validate teh groups the user was in and then verify who was user when they tried to add game

export { router as gameRouter };