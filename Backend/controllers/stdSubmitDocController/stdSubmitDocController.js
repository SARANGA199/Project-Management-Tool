import StdSubmitDocs from "../../models/stdSubmitDocModel/stdSubmitDocModel.js";

export const getStdSubmitDocs = async (req,res)=>{
    try {
        const docs = await StdSubmitDocs.find();
        res.json(docs);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const saveDocs =  async (req,res)=>{
    const doc = new StdSubmitDocs(req.body);
    try {
        await doc.save();
        res.status(201).json(doc);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
}