import topicSubmitDoc from "../../models/topicDocSubmitModel/topicDocSubmitModel.js";

export const addTopicDoc = async(req,res)=>{

    try{
        const doc = await topicSubmitDoc.create(req.body);
        res.status(201).json(doc);

    }catch (err){

        res.status(500).json(err);
    }


}

export const displayTopicDoc = async (req,res) => {

    topicSubmitDoc.find().then((data)=>{
        res.json(data);
        console.log("display successful")

    }).catch((err)=>{

        console.catch.log(err);
    })

}

export const getOneTopicDoc = async (req, res) => {
    let tId = req.params.id;
  
    topicSubmitDoc.findOne({groupID:tId})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
