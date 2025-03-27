import { Request, Response } from 'express';
import { Session } from '../models/Session';
import { User } from '../models/User';

export const createSession = async (req: Request, res: Response) => {
  try {
    const session = new Session({
      ...req.body,
      mentor: req.user?._id,
    });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create session', error });
  }
};

export const getSessions = async (req: Request, res: Response) => {
  try {
    const query: any = {};
    
    if (req.user?.userType === 'senior') {
      query.mentor = req.user._id;
    } else {
      query.mentee = req.user?._id;
    }

    const sessions = await Session.find(query)
      .populate('mentor', 'firstName lastName skills rating')
      .populate('mentee', 'firstName lastName interests rating');
    
    res.json(sessions);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch sessions', error });
  }
};

export const updateSessionStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (session.mentor.toString() !== req.user?._id.toString() && 
        session.mentee.toString() !== req.user?._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this session' });
    }

    session.status = status;
    await session.save();

    // If session is completed, update points and ratings
    if (status === 'completed') {
      const pointsEarned = Math.floor(session.duration / 30) * 10; // 10 points per 30 minutes
      session.pointsEarned = pointsEarned;
      await session.save();

      // Update mentor's points
      const mentor = await User.findById(session.mentor);
      if (mentor) {
        mentor.points += pointsEarned;
        await mentor.save();
      }
    }

    res.json(session);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update session status', error });
  }
};

export const submitFeedback = async (req: Request, res: Response) => {
  try {
    const { rating, comment } = req.body;
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (session.status !== 'completed') {
      return res.status(400).json({ message: 'Can only submit feedback for completed sessions' });
    }

    session.feedback = {
      rating,
      comment,
      givenBy: req.user?._id,
    };
    await session.save();

    // Update user rating
    const targetUser = await User.findById(
      req.user?._id.toString() === session.mentor.toString() 
        ? session.mentee 
        : session.mentor
    );

    if (targetUser) {
      const userSessions = await Session.find({
        $or: [
          { mentor: targetUser._id },
          { mentee: targetUser._id }
        ],
        'feedback.rating': { $exists: true }
      });

      const averageRating = userSessions.reduce((acc, curr) => 
        acc + (curr.feedback?.rating || 0), 0) / userSessions.length;

      targetUser.rating = averageRating;
      await targetUser.save();
    }

    res.json(session);
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit feedback', error });
  }
};

export const getSessionStats = async (req: Request, res: Response) => {
  try {
    const stats = await Session.aggregate([
      {
        $match: {
          $or: [
            { mentor: req.user?._id },
            { mentee: req.user?._id }
          ]
        }
      },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalPoints: { $sum: '$pointsEarned' }
        }
      }
    ]);

    res.json(stats);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch session stats', error });
  }
}; 