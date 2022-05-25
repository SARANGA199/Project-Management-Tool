import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const templateSchema = new Schema({

    adminName:{
        type:String,
        required:true,
<<<<<<< HEAD
        //trim:true
=======
        trim:true
>>>>>>> d0fa2a1da09751a5ec488834d01a65f0052fc183
    },
    templateTitle:{
        type:String,
        required:true,
<<<<<<< HEAD
        //trim:true
=======
        trim:true
>>>>>>> d0fa2a1da09751a5ec488834d01a65f0052fc183
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