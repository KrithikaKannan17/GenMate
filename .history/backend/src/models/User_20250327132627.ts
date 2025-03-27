import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  userType: 'teen' | 'senior';
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  interests: string[];
  skills: string[];
  bio: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  availability: {
    preferredDays: string[];
    preferredTimes: string[];
  };
  rating: number;
  points: number;
  badges: string[];
  isVerified: boolean;
  guardianConsent?: boolean;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['teen', 'senior'],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  interests: [{
    type: String,
  }],
  skills: [{
    type: String,
  }],
  bio: {
    type: String,
    maxLength: 500,
  },
  location: {
    city: String,
    state: String,
    country: String,
  },
  availability: {
    preferredDays: [String],
    preferredTimes: [String],
  },
  rating: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  badges: [{
    type: String,
  }],
  isVerified: {
    type: Boolean,
    default: false,
  },
  guardianConsent: {
    type: Boolean,
    required: function(this: IUser) {
      return this.userType === 'teen';
    },
  },
}, {
  timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema); 