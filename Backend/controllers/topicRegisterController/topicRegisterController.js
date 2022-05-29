import Topics from "../../models/topicRegisterModel/topicRegisterModel.js";

export const getTopics = async (req, res) => {
  try {
    const topics = await Topics.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveTopics = async (req, res) => {
  const topic = new Topics(req.body);
  try {
    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTopicStatus = async (req, res) => {
  const tId = req.params.id;

  const { topicStatus } = req.body;

  const updateTopic = {
    tId,
    topicStatus,
  };

  const update = await Topics.findByIdAndUpdate(tId, updateTopic)
    .then(() => {
      res.status(200).send({ status: "Topic Status is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with Updating Topic Status",
        error: err.message,
      });
    });
};

export const getOneTopic = async (req, res) => {
  let tId = req.params.id;

  Topics.findById(tId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
