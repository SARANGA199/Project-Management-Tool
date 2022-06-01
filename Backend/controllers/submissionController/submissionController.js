import Submission from '../../models/submission/submission.js'


export const addSubmissiontype = async(req,res)=>{

    try{
         const submission = await Submission.create(req.body);
         res.status(201).json(submission);

    }catch (err){

        res.status(500).json(err);
    }
     


    
};

export const displaySubmissionType = async (req,res) => {



    Submission.find().then((data)=>{
       res.json(data);
       console.log("display sussesfull")
       
    }).catch((err)=>{
  
       console.catch.log(err);
    })
  
  };

export const updateSubmissionType = async (req,res) =>{

    
  
    const sId = req.params.id;
    

     //const {submission}= req.body;
    
    

    const update = await Submission.findByIdAndUpdate(sId, req.body)
      .then(() => {
      res.status(200).send({ status: "Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating", error: err.message });
    });
};

export const updateAllSubmissionTypeData = async (req,res) =>{

    
  
  const sId = req.params.id;
  

   //const {submission}= req.body;
  
  

  const update = await Submission.findByIdAndUpdate(sId, req.body)
    .then(() => {
    res.status(200).send({ status: "Updated" });
  })
  .catch((err) => {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with Updating", error: err.message });
  });
};

export const deleteSubType = async (req, res) => {
  let sId = req.params.id;
  await Submission.findByIdAndDelete(sId)
    .then(() => {
      res.status(200).send({ status: "Submission Type  deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Submission Type", error: err.message });
    });
};

export const updateMarkStatus = async (req,res) =>{

    
  
  const sId = req.params.id;
  

   const {marksStatus}= req.body;
  
  

  const update = await Submission.findByIdAndUpdate(sId, {marksStatus:marksStatus})
    .then(() => {
    res.status(200).send({ status: "Updated" });
  })
  .catch((err) => {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with Updating", error: err.message });
  });
};