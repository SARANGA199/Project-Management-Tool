import PanelScheme from "../../models/allocatePanel/allocatePanel.js";

export const addPanelMember = async (req, res) => {
  try {
    const panel = await PanelScheme.create(req.body);
    res.status(201).json(panel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPanel = async (req, res) => {
  try {
    const panel = await PanelScheme.find();
    res.status(201).json(panel);
  } catch (err) {
    console.catch.log(err);
  }
};