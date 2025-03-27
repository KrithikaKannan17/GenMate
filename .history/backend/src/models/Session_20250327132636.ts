import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface ISession extends Document {
  mentor: IUser['_id'];
  mentee: IUser['_id'];
  skill: string;
  sessionType: 'virtual' | 'in-person';
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduledDate: Date;
  duration: number; // in minutes
  location?: {
    address?: string;
    meetingLink?: string;
  };
  description: string;
  feedback?: {
    rating: number;
    comment: string;
    givenBy: IUser['_id'];
  };
  pointsEarned: number;
}

const sessionSchema = new Schema<ISession>({
  mentor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mentee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  sessionType: {
    type: String,
    enum: ['virtual', 'in-person'],
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled',
  },
  scheduledDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  location: {
    address: String,
    meetingLink: String,
  },
  description: {
    type: String,
    required: true,
  },
  feedback: {
    rating: Number,
    comment: String,
    givenBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  pointsEarned: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export const Session = mongoose.model<ISession>('Session', sessionSchema); 