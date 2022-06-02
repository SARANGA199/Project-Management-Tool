import RequestSV from "../../models/requestSupervisorModel/requestSupervisorModel.js";
// import nodemailer from "nodemailer";

export const getRequestSV = async (req, res) => {
  try {
    const requestSupervisors = await RequestSV.find();
    res.json(requestSupervisors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveRequestSV = async (req, res) => {
  const requestSupervisor = new RequestSV(req.body);
  try {
    await requestSupervisor.save();
    res.status(201).json(requestSupervisor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getRequestsById = async (req, res) => {
  try {
    const sRequests = await RequestSV.findById(req.params.id);
    res.json(sRequests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// export const updateRequest = async (req,res)=>{
//     try {
//         const {supervisorStatus} = req.body
//         await RequestSV.findOneAndUpdate({rid:req.params.id},{supervisorStatus});
//         res.status(200).json({msg: "Successfully Updated !"});
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }

export const updateRequest = async (req, res) => {
  const rId = req.params.id;

  const {
    supervisorStatus,
    groupID,
    groupLeaderEmail,
    researchTopicName,
    researchSupervisor,
  } = req.body;

  const updateReq = {
    rId,
    supervisorStatus,
  };

  const update = await RequestSV.findByIdAndUpdate(rId, updateReq)
    .then(() => {
      res.status(200).send({ status: "Request status is  Updated" });
      //
      // //sending Mails
      // let transporter = nodemailer.createTransport({
      //
      //     service: 'gmail',
      //     auth: {
      //         user: 'themoviehub3020@gmail.com' ,
      //         pass: 'moviehub3020'
      //     }
      // });
      // //if(supervisorStatus == "Accepted"){}
      // let mailOptions = {
      //     from: 'themoviehub3020@gmail.com',             //need to add new email
      //     to: `${groupLeaderEmail}`,
      //     subject: 'Request Accepted By Supervisor',
      //     text: 'Request Accepted By Supervisor ',
      //
      //     html: `<br>  Group ID:${groupID} </br><br>  Topic Name:${researchTopicName} </br><br> Your Group Request is accepted by :${researchSupervisor} !! <br />`,
      //
      // };
      //
      // transporter.sendMail(mailOptions, (err, data) => {
      //
      //     if (err) {
      //         console.log('Error occurs',err);
      //     }
      //     console.log('Email sent!!!');
      // });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating status", error: err.message });
    });
};

export const updateCoSupervisorRequest = async (req, res) => {
  const rId = req.params.id;

    const coSupervisor = req.body.coSupervisorData;

    // const updateReq = {
    //     rId,
    //     coSupervisor
    // };

    const update = await RequestSV.findByIdAndUpdate(rId, {coSupervisor:coSupervisor})
        .then(() => {
            res.status(200).send({ status: "Request status is  Updated" });
        })
        .catch((err) => {
            console.log(err);
            res
                .status(500)
                .send({ status: "Error with Updating status", error: err.message });
        });
};

export const deleteRequest = async (req, res) => {
  try {
    await RequestSV.deleteOne({ rid: req.params.id });
    res.status(200).send({ status: "Request  deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
