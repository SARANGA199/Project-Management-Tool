import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const templateSchema = new Schema({

    adminName:{
        type:String,
        required:true,
        trim:true
    },
    templateTitle:{
        type:String,
        required:true,
        trim:true
    },
    templateDiscription:{
        type:String, 
        required:true,
  
    },
    template:{
        type:String, 
        required:true,
  
    }
   
},{timestamps:true})


const Template = mongoose.model('Template',templateSchema);
export default Template;