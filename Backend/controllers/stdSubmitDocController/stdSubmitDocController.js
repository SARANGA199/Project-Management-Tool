import StdSubmitDocs from "../../models/stdSubmitDocModel/stdSubmitDocModel.js";

export const getStdSubmitDocs = async (req, res) => {
  try {
    const docs = await StdSubmitDocs.find();
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveDocs = async (req, res) => {
  const doc = new StdSubmitDocs(req.body);
  try {
    await doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStdSubmitDocsPresentation = async (req, res) => {
  StdSubmitDocs.find({ submissionType: req.params.type })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

export const updateSubmitStatus = async (req, res) => {
  const sId = req.params.id;

  const { evaluateStatus } = req.body;

  const updateSubmit = {
    sId,
    evaluateStatus,
  };

  const update = await StdSubmitDocs.findByIdAndUpdate(sId, updateSubmit)
    .then(() => {
      res.status(200).send({ status: "Submit Status is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with Updating Submit Status",
        error: err.message,
      });
    });
};
