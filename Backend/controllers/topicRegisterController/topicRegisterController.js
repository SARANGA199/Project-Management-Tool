import Topics from '../../models/topicRegisterModel/topicRegisterModel.js';

export const getTopics = async (req,res)=>{
    try {
        const topics = await Topics.find();
        res.json(topics);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const saveTopics = async (req,res)=>{
    const topic = new Topics(req.body);
    try {
        await topic.save();
        res.status(201).json(topic);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}