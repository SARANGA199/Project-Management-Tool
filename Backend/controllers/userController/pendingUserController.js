import PendingUsers from '../../models/user/PendingUsers.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from './sendMail.js';
import { google } from "googleapis";
const { OAuth2 } = google.auth;

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const {CLIENT_URL} = process.env

const pendingUserController = {
    register: async (req, res) =>{
        try {
            const {name, email, regNumber, specialization, researchArea, password, role} = req.body;

            const mail = await PendingUsers.findOne({email})
            if(mail) return res.status(400).json({msg: "The email already exists."})

            const regNo = await PendingUsers.findOne({regNumber})
            if(regNo) return res.status(400).json({msg: "The Registration number already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password must contain at least 6 characters long."})
            
            // Encrypt the Password
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new PendingUsers({
                name, email, regNumber, specialization, researchArea, role, password: passwordHash
            })

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/pending/activate/${activation_token}`
            sendMail(email, url, "Verify your email address")


            res.json({msg: "Register Success! Please activate your email to start."})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }

    },
    activateEmail: async (req, res) => {
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)
            const {name, email, regNumber, specialization, researchArea, password, role} = user
            const check = await PendingUsers.findOne({email})
            if(check) return res.status(400).json({msg:"This email already exists."})

            const newUser = new PendingUsers({
                name, email, regNumber, specialization, researchArea, password, role
            })

            await newUser.save()

            res.json({msg: "Account has been activated!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getAllInfo: async (req, res) => {
        try {
            PendingUsers.find().exec((err,users) =>{
                if(err){
                  return res.status(400).json({
                    error:err
                  });
                }
                return res.status(200).json({
                  success:true,
                  pendingUsers:users
                });
              });
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteUser: async (req, res) => {
        try {
            await PendingUsers.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

const createActivationToken = (user) => {
    return jwt.sign(user.toJSON(), process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

export default pendingUserController;