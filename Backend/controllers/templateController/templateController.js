import Template from '../../models/template/template.js'


export const addTemplate = async(req,res)=>{

    try{
         const template = await Template.create(req.body);
         res.status(201).json(template);

    }catch (err){

        res.status(500).json(err);
    }
     


    
}

export const displayTemplate = async (req,res) => {



    Template.find().then((data)=>{
       res.json(data);
       
    }).catch((err)=>{
  
       console.catch.log(err);
    })
  
  }