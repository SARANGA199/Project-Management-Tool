import PresentationMarks from "../../models/presentationMarks/presentationMarks.js";

export const addPresentationMark = async (req, res) => {
  try {
    const marks = await PresentationMarks.create(req.body);
    res.status(201).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPresentationMarks = async (req, res) => {
  try {
    const marks = await PresentationMarks.find();
    res.status(201).json(marks);
  } catch (err) {
    console.catch.log(err);
  }
};
