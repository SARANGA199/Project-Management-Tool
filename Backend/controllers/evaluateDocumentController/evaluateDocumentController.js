import DocumentMarks from "../../models/documentMarks/documentsMarks.js";

export const addDocumentMark = async (req, res) => {
  try {
    const marks = await DocumentMarks.create(req.body);
    res.status(201).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getDocumentMarks = async (req, res) => {
  try {
    const marks = await DocumentMarks.find();
    res.status(201).json(marks);
  } catch (err) {
    console.catch.log(err);
  }
};
