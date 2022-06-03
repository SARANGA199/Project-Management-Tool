import mongoose from "mongoose";
import {DefaultTransporter} from "google-auth-library";

const topics = mongoose.Schema({
    topicName:{
        type:String,
        required:true
    },
    topicCategory:{
        type:String,
        required: true
    },
    groupID:{
        type:String,
        required:true
    },
    groupLeaderEmail:{
        type:String,
        required:true
    },
    topicDescription:{
        type:String,
        required:true
    },topicStatus:{
        type:String,
        default:'pending'
        
    },topicFeedback:{
        type:String,
        default:'pending'
    },topicDocument:{
        type:String,
        default:'pending'
    }
})

export default  mongoose.model('Topics',topics)