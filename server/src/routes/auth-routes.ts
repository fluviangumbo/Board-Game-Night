import { Router} from 'express';
import { login } from '../controllers/authController.js';

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
