import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Apply a pre-save middleware to handle password hashing or other logic before saving the document
userSchema.pre('save', function(next) {
  // Implement hashing here if not done client-side
  // E.g., hash the password with bcrypt before storing it
  this.updatedAt = new Date(); // Update the updatedAt field to the current date
  next();
});

export const User = mongoose.model<IUser>('User', userSchema);
