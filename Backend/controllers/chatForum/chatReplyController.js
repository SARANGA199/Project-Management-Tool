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
