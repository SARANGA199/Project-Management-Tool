import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const submissionSchema = new Schema({

    adminName:{
        type:String,
        required:true,
        trim:true
    },
    subTypeName:{
        type:String,
        required:true,
        trim:true
    },
    subTypeDiscription:{
        type:String, 
        //required:true,
  
    },
    template:{
        type:String, 
       // required:true,
  
    },
    templateTitle:{
        type:String,
    },
	templateDiscription:{
        type:String,
    },

   
},{timestamps:true})


const Submission = mongoose.model('Submission',submissionSchema);
export default Submission;