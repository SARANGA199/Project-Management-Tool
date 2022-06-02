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
    _id,name,regNumber,email,topicName } = req.body;

  // const updatepanel = {
  //   groupID,
  //   panelMembers,
  // };

  var member = {"id": _id,"name": name, "regNumber": regNumber};

  const update = await PanelScheme.findOneAndUpdate({groupID:groupID},{$push:{panelMembers:member}})
    .then(() => {
      res.status(200).send({ status: "Panel member added" });

      //mail send
      let transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: "themoviehub3020@gmail.com",

          pass: "moviehub3020",
        },
      });

      let mailOptions = {
        from: "themoviehub3020@gmail.com", //need to add new email

        to: `${email}`,

        subject: "Panel Member allocate Notification",

        // text: nameOnCard + ' Your Payment Done!!' +<br></br>+

        // 'Customer Name' + ' '+ <br>dfdf<br/>+

        // 'Customer mobile'

        text: "Hey there, it is our first message sent with Nodemailer ",

        html: `<br>  Group ID:${groupID} </br><br>  Topic Name:${topicName} </br> <br> ${name},Your are add to this group as a panel member!! <br />`,
      };

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log("Error occurs", err);
        }

        console.log("Email sent!!!");
      });
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
 //let memberId = req.params.memberId;

 

  try {
    const panel = await PanelScheme.findOne({groupID:groupID});
    //const filterPanel = await panel.find({id:id});


    res.status(201).json(panel);
  } catch (err) {
    console.catch.log(err);
  }
};

export const removeMember = async (req, res) => {
  const mId = req.params.id;
    //console.log("awa")
  const { groupID,
    name,regNumber } = req.body;

  // const updatepanel = {
  //   groupID,
  //   panelMembers,
  // };

  var member = {"id": mId,"name": name, "regNumber": regNumber};

  const update = await PanelScheme.findOneAndUpdate({groupID:groupID},{$pull:{panelMembers:member}})
    .then(() => {
      res.status(200).send({ status: "Panel member remove" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with Adding panel member",
        error: err.message,
      });
    });
};