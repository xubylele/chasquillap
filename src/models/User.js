import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  names: {
    type: String,
    required: true,
    min: 3,
  },
  last_names: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  status: {
    type: String,
    default: 'pending',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const clientSchema = new Schema({
  ...userSchema.obj,
});

export const Child = model('Client', clientSchema);
export const User = model('User', userSchema);
