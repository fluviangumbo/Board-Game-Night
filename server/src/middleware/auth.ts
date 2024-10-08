import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface JwtPayload {
  id: number;
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // [Bearer, TOKEN_HERE] this is whats returned by that authHeader.split with the [1]
    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, payload) => {
      if (err) {
        return res.sendStatus(401); // Unauthorized
      }

      req.user = payload as JwtPayload; // user is token payload
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};
