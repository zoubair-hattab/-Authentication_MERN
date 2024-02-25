import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      uinque: true,
    },
    email: {
      type: String,
      required: true,
      uinque: true,
    },
    password: {
      type: String,
      required: true,
      uinque: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);
export default User;
