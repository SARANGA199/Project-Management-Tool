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
        default:'Pending'
    },
    coSupervisor:{
        type:String,
        default:''
    },
    coSupervisorStatus:{
        type:String,
        default:'Pending'
    },
})

export default mongoose.model('RequestSV',RequestSupervisors);