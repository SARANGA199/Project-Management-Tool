import Submission from '../../models/submission/submission.js'


export const addSubmissiontype = async(req,res)=>{

    try{
         const submission = await Submission.create(req.body);
         res.status(201).json(submission);

    }catch (err){

        res.status(500).json(err);
    }
     


    
}

export const displaySubmissionType = async (req,res) => {



    Submission.find().then((data)=>{
       res.json(data);
       console.log("display sussesfull")
       
    }).catch((err)=>{
  
       console.catch.log(err);
    })
  
  }
