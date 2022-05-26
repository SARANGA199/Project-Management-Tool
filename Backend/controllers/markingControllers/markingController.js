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

export const updateMarking = async (req, res) => {
  const mId = req.params.id;

  const { specialization, projectName, totalMarks, criteria } = req.body;

  const updateMark = {
    mId,
    specialization,
    projectName,
    totalMarks,
    criteria,
  };

  const update = await MarkingScheme.findByIdAndUpdate(mId, updateMark)
    .then(() => {
      res.status(200).send({ status: "Marking is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating Marking", error: err.message });
    });
};

export const deleteMarking = async (req, res) => {
  let mId = req.params.id;
  await MarkingScheme.findByIdAndDelete(mId)
    .then(() => {
      res.status(200).send({ status: "Marking  deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Marking", error: err.message });
    });
};
