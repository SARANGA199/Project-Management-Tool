import MarkingScheme from '../../models/markingScheme/markingScheme.js'


export const addMarkingScheme = async(req,res)=>{

    try{
         const theater = await MarkingScheme.create(req.body);
         res.status(201).json(theater);

    }catch (err){

        res.status(500).json(err);
    }
     


    
}