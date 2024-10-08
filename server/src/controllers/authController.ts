import { type Request, type Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1d' });
  
  return res.json({ token });
};

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    const secretKey = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, { expiresIn: '1d' });
  
    return res.json({ token });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};