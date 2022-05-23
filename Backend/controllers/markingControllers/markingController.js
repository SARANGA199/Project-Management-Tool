import MarkingScheme from "../../models/markingScheme/markingScheme.js";

export const addMarkingScheme = async (req, res) => {
  try {
    const marking = await MarkingScheme.create(req.body);
    res.status(201).json(marking);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMarkingScheme = async (req, res) => {
  try {
    const marking = await MarkingScheme.find();
    res.status(201).json(marking);
  } catch (err) {
    console.catch.log(err);
  }
};

export const getOneMarking = async (req, res) => {
  const mid = req.params.id;

  try {
    const marking = await MarkingScheme.findById(mid);
    res.status(200).json(marking);
  } catch (error) {
    console.catch.log(error);
  }
};
