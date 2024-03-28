import mongoose from "mongoose";

const userLikedSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  likedVideos: [{ type: String }],
});

export default mongoose.model("userLiked", userLikedSchema);
