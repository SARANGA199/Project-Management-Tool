import ChatReply from "../../models/chatScheme/chatReply.js";

export const addChatReply = async (req, res) => {
  try {
    const chat = await ChatReply.create(req.body);
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getReplyBYForumID = async (req, res) => {
  const ForumId = req.params.fid;
  try {
    const chat = await ChatReply.find({
      forumId: ForumId,
    });
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteChatReply = async (req, res) => {
  let rId = req.params.id;
  await ChatReply.findByIdAndDelete(rId)
    .then(() => {
      res.status(200).send({ status: "Reply deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Reply", error: err.message });
    });
};

export const updateChatReply = async (req, res) => {
  const rId = req.params.id;

  const { title, reply } = req.body;

  const updateReply = {
    rId,
    title,
    reply,
  };

  const update = await ChatReply.findByIdAndUpdate(rId, updateReply)
    .then(() => {
      res.status(200).send({ status: "Reply is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating Reply", error: err.message });
    });
};
