import mongoose from "mongoose";

const stdSubmitDocsSchema = mongoose.Schema({
  groupID: {
    type: String,
  },
  groupLeaderName: {
    type: String,
  },
  groupLeaderEmail: {
    type: String,
  },
  submissionType: {
    type: String,
  },
  typeName: {
    type: String,
  },

  submissionComments: {
    type: String,
  },
  SubmitDoc: {
    type: String,
  },
  evaluateStatus: {
    type: String,
    default: "Pending",
  },
});
export default mongoose.model("StdSubmitDocs", stdSubmitDocsSchema);
