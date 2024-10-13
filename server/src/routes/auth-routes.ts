import { Router} from 'express';
import { login, createUser } from '../controllers/authController.js';

const router = Router();

router.post('/login', login);
router.post('/signup', createUser);

export default router;
