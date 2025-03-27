import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const register = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed', error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ message: 'Login failed', error });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch profile', error });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'bio', 'interests', 'skills', 'location', 'availability'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ message: 'Invalid updates' });
    }

    updates.forEach(update => {
      (req.user as any)[update] = req.body[update];
    });

    await req.user?.save();
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update profile', error });
  }
};

export const searchUsers = async (req: Request, res: Response) => {
  try {
    const { userType, skills, interests, location } = req.query;
    const query: any = {};

    if (userType) query.userType = userType;
    if (skills) query.skills = { $in: (skills as string).split(',') };
    if (interests) query.interests = { $in: (interests as string).split(',') };
    if (location) {
      const locationObj = JSON.parse(location as string);
      query['location.city'] = locationObj.city;
      query['location.state'] = locationObj.state;
    }

    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: 'Failed to search users', error });
  }
};

export const updatePoints = async (req: Request, res: Response) => {
  try {
    const { points } = req.body;
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user.points += points;
    await req.user.save();
    res.json({ points: req.user.points });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update points', error });
  }
};

export const addBadge = async (req: Request, res: Response) => {
  try {
    const { badge } = req.body;
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!req.user.badges.includes(badge)) {
      req.user.badges.push(badge);
      await req.user.save();
    }

    res.json({ badges: req.user.badges });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add badge', error });
  }
}; 