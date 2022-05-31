import ChatForum from "../../models/chatScheme/chatForum.js";

export const addChatForum = async (req, res) => {
  try {
    const chat = await ChatForum.create(req.body);
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getForumBYGroupID = async (req, res) => {
  const groupId = req.params.gid;
  try {
    const chat = await ChatForum.find({
      groupID: groupId,
    });
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getOneForum = async (req, res) => {
  const forId = req.params.id;
  try {
    const chat = await ChatForum.findById(forId);
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};
