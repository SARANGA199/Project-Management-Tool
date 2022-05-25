import PresentationMarks from "../../models/presentationMarks/presentationMarks.js";

export const addPresentationMark = async (req, res) => {
  try {
    const marks = await PresentationMarks.create(req.body);
    res.status(201).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
};
