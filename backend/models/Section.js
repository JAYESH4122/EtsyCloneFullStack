import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Section", SectionSchema);
