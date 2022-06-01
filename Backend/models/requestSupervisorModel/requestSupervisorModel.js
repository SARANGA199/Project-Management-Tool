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
    },
    supervisorStatus:{
        type:String,
        default:'pending'
    },
    coSupervisor:{
        type:String,
        default:' '
    },
    coSupervisorStatus:{
        type:String,
        default:'pending'
    },
})

export default mongoose.model('RequestSV',RequestSupervisors);