import mongoose from "mongoose";

const stdSubmitDocsSchema = mongoose.Schema({
  groupID:{
      type:String
  },
  groupLeaderName:{
      type:String
  },
  groupLeaderEmail:{
      type:String
  },
  submissionComments:{
      type:String
  }

})
export  default mongoose.model("StdSubmitDocs",stdSubmitDocsSchema);