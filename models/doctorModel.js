import mongoose from "mongoose";
const doctorSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    fees_per_hour: {
      type: Number,
      required: true,
    },
    timings: {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
const Doctor = mongoose.model("doctor", doctorSchema);
export default Doctor;
