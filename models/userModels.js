import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_doctor: {
    type: Boolean,
    default: false,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  seen_notifications: {
    type: Array,
    default: [],
  },
  unseen_notifications: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("user", userSchema);
export default User;
