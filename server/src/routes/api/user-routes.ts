import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '../../controllers/usersController.js';
const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export { router as userRouter };
