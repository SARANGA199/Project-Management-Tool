import RequestSV from "../../models/requestSupervisorModel/requestSupervisorModel.js";

export const getRequestSV =  async (req,res)=>{
    try {
        const requestSupervisors = await RequestSV.find();
        res.json(requestSupervisors);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const saveRequestSV = async (req,res)=>{
    const requestSupervisor = new RequestSV(req.body);
    try {
        await requestSupervisor.save();
        res.status(201).json(requestSupervisor);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}