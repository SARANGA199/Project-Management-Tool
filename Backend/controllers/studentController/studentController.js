import Members from "../../models/studentModel/studentsModel.js";

export const getMembers = async (req, res) => {
  try {
    const members = await Members.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const saveMembers = async (req,res)=>{
//     const member = new Members(req.body);
//     try {
//         await member.save();
//         res.status(201).json(member);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }
export const saveMembers = async (req, res) => {
  const member = new Members(req.body);
  try {
    const insertedmembers = await member.save();
    res.status(201).json(insertedmembers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getGroupID = async (req, res) => {
  const mail = req.params.email;

  try {
    const member = await Members.findOne({
      $or: [
        { leaderEmail: mail },
        { Member2Email: mail },
        { Member3Email: mail },
        { Member4Email: mail },
      ],
    });

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
