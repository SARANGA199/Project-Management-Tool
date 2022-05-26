import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const submissionSchema = new Schema({

    adminName:{
        type:String,
        //required:true,
        //trim:true
    },
    subTypeName:{
        type:String,
        required:true,
        //trim:true
    },
    subTypeDiscription:{
        type:String, 
        required:true,
  
    },
    submition:{
        type:String, 
       // required:true,
  
    }
   
},{timestamps:true})


const Submission = mongoose.model('Submission',submissionSchema);
export default Submission;