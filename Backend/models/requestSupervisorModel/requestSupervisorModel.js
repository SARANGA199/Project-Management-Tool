import mongoose from "mongoose";

const RequestSupervisors = mongoose.Schema({
    researchSupervisor:{
        type:String
    },
    researchCategory:{
        type:String
    },
    groupID:{
        type:String
    },
    groupLeaderEmail:{
        type:String
    },
    researchTopicName:{
        type:String
    },
    comments:{
        type:String
    }
})

export default mongoose.model('RequestSV',RequestSupervisors);