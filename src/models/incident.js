import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  status: {
    type: String,
    enum: ["low", "high"],
    default: "pending",
  },

  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Incident =
  mongoose.models.incidents || mongoose.model("incidents", IncidentSchema);
