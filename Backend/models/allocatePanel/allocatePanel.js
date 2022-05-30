import mongoose from "mongoose";

const panelsSchema = mongoose.Schema({
   
    groupID:{
        type:String,
        required:true
    },
    specialization:{
             
        type:String,
        required:true
    },
    panelMembers:{
        type:[
            {
                memberID:{type:String,required:true},
                meberName:{type:String,required:true},
                // id : {type:String,required:true}
            }
        ]
    }
},{timestamps:true})

export default  mongoose.model('Panel',panelsSchema)