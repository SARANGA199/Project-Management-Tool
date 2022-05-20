import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const markingSchema = new Schema({

     module:{
        type:String,
        required:true,
        trim:true
    },
    projectName:{
        type:String,
        required:true,
        trim:true
    },
     date:{
        type:String, 
        required:true,
  
    }
   
},{timestamps:true})


const Marking = mongoose.model('Marking',markingSchema);
export default Marking;

