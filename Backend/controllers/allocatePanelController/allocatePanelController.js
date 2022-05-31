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

export const addMember = async (req, res) => {
  //const tId = req.params.id;
    //console.log("awa")
  const { groupID,
    _id,name,regNumber } = req.body;

  // const updatepanel = {
  //   groupID,
  //   panelMembers,
  // };

  var member = {"id": _id,"name": name, "regNumber": regNumber};

  const update = await PanelScheme.findOneAndUpdate({groupID:groupID},{$push:{panelMembers:member}})
    .then(() => {
      res.status(200).send({ status: "Panel member added" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with Adding panel member",
        error: err.message,
      });
    });
};

export const getPanelMember = async (req, res) => {

 let groupID = req.params.groupId;
 let memberId = req.params.memberId;
 

  try {
    const panel = await PanelScheme.findOne({groupID:groupID}).select('panelMembers.id');
    //const filterPanel = await panel.find({id:id});


    res.status(201).json(panel);
  } catch (err) {
    console.catch.log(err);
  }
};