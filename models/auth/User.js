import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['developer', 'owner', 'admin', 'accountant', 'cashier', 'delivery', 'kot'],
  },
  
  active: { type: Boolean, default: true },

  createdUser: {
    type: String,
  },
  lastUpdatedUser: {
    type: String,
  },
},
{
  timestamps: { currentTime: () => Date.now() + 5.5 * 60 * 60 * 1000 }, // Adding 5.5 hours for IST
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
