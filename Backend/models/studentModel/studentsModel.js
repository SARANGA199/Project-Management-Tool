import mongoose from "mongoose";

const students = mongoose.Schema({
  leaderName: {
    type: String,
    required: true,
  },

  leaderID: {
    type: String,
    required: true,
  },
  leaderEmail: {
    type: String,
    required: true,
  },

  //Member2
  Member2Name: {
    type: String,
    required: true,
  },

  Member2ID: {
    type: String,
    required: true,
  },
  Member2Email: {
    type: String,
    required: true,
  },

  //Member3
  Member3Name: {
    type: String,
    required: true,
  },

  Member3ID: {
    type: String,
    required: true,
  },
  Member3Email: {
    type: String,
    required: true,
  },

  //Member4
  Member4Name: {
    type: String,
    required: true,
  },

  Member4ID: {
    type: String,
    required: true,
  },
  Member4Email: {
    type: String,
    required: true,
  },
  GroupID: {
    type: String,
  },
});

export default mongoose.model("Members", students);
