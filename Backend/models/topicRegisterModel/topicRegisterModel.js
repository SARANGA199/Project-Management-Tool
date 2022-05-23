import mongoose from "mongoose";

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
    }

})

export default  mongoose.model('Topics',topics)