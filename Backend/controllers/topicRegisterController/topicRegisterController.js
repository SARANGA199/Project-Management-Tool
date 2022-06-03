import Topics from "../../models/topicRegisterModel/topicRegisterModel.js";
import nodemailer from "nodemailer";

export const getTopics = async (req, res) => {
  try {
    const topics = await Topics.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveTopics = async (req, res) => {
  const topic = new Topics(req.body);
  try {
    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTopicStatus = async (req, res) => {
  const tId = req.params.id;

  const { topicStatus, groupLeaderEmail, groupID, topicName } = req.body;

  const updateTopic = {
    tId,
    topicStatus,
  };

  const update = await Topics.findByIdAndUpdate(tId, updateTopic)
    .then(() => {
      res.status(200).send({ status: "Topic Status is  Updated" });

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

              to: `${groupLeaderEmail}`,

              subject: "Research Project Topic Status",

              text: "Dear Student,",

              html: `<br>  Group ID:${groupID} </br><br> Your team's  Topic Name:<b>${topicName} </b>is ${topicStatus}.<br> Please refer research management to get more details `,
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
        status: "Error with Updating Topic Status",
        error: err.message,
      });
    });
};

export const updateTopicFeedback = async (req, res) => {
  const tId = req.params.id;

  const { topicFeedback, email, groupID, topicName } = req.body;

  const updateTopic = {
    tId,
    topicFeedback,
  };
  const updateFeedback = await Topics.findByIdAndUpdate(tId, updateTopic)
    .then(() => {
      res.status(200).send({ status: "Topic Feedback is  Updated" });
      //res.console.log(updateFeedback)

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

        subject: "Research Project Topic Feedback",

        // text: nameOnCard + ' Your Payment Done!!' +<br></br>+

        // 'Customer Name' + ' '+ <br>dfdf<br/>+

        // 'Customer mobile'

        text: "Hey there, it is our first message sent with Nodemailer ",

        html: `<br>  Group ID:${groupID} </br><br>  Topic Name:${topicName} </br> <br>  Feedback:${topicFeedback} </br><br> Your Group Topic is Accept!! <br />`,
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
        status: "Error with Updating Topic Feedback",
        error: err.message,
      });
    });
};

export const getOneTopic = async (req, res) => {
  let tId = req.params.id;

  Topics.findById(tId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTopicDocumentStatus = async (req, res) => {
  const GId = req.params.gid;

  const topicDocument = req.body.statudata;
  const leaderMail = req.body.Lemail;

  const updateTopic = {
    GId,
    topicDocument,
    leaderMail,
  };

  const update = await Topics.findOneAndUpdate({$and:[{groupID:GId},{groupLeaderEmail:leaderMail}]}, {topicDocument:topicDocument})
    .then(() => {
      res.status(200).send({ status: "Topic Status is  Updated" });

    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with Updating Topic Status",
        error: err.message,
      });
    });
};
