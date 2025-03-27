import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';

interface JwtPayload {
  userId: string;
  userType: 'teen' | 'senior';
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as JwtPayload;
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

export const checkUserType = (allowedTypes: ('teen' | 'senior')[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Please authenticate.' });
    }

    if (!allowedTypes.includes(req.user.userType)) {
      return res.status(403).json({ message: 'Access denied. Invalid user type.' });
    }

    next();
  };
}; 