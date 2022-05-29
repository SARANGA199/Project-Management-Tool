import mongoose from "mongoose";

const topicDocSubmitSchema = mongoose.Schema({
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
    },
    topicSubmitDoc:{
        type:String
    }

})
export  default mongoose.model("topicSubmitDoc",topicDocSubmitSchema);