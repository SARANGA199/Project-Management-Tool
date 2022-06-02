import mongoose from "mongoose";
const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    projectId: {
      type: String,
      required: true,
    },

    researchTopic: {
      type: String,
      required: true,
    },

    totalMarks: {
      type: Number,
      required: true,
    },

    criteria: {
      type: [
        {
          criteriaName: { type: String, required: true },
          marksAllocation: { type: Number, required: true },
          marks: { type: Number, required: true },
          // id : {type:String,required:true}
        },
      ],
    },
  },
  { timestamps: true }
);

const DocumentMarks = mongoose.model(
  "DocumentMarks",
  documentSchema
);
export default DocumentMarks;
