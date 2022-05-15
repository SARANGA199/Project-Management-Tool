import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const markingSchema = new Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
     showTime:{
        type:[String],
        required:true,
  
    },
    theaters:{
        type:[String],
        required:true 
    },
    photo:{
        type:String,
        
    }

   
},{timestamps:true})


const Marking = mongoose.model('Marking',markingSchema);
export default Marking;

