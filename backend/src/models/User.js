import mongoose from "mongoose";

// const whishlistSchema = new mongoose.Schema({
//   propertyId: {
//     type: String,
//     required: true,
//   },
// });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    phone: {
      type: String,
    },
    company: {
      type: String,
    },
    address: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
