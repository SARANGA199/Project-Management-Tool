import Users from '../../models/user/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendMail from './sendMail.js'
import { google } from "googleapis";
const { OAuth2 } = google.auth;

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const {CLIENT_URL} = process.env

const userController = {
    register: async (req, res) =>{
        try {
            const {name, email, regNumber, specialization, researchArea, password, role} = req.body;

            const mail = await Users.findOne({email})
            if(mail) return res.status(400).json({msg: "The email already exists."})

            const regNo = await Users.findOne({regNumber})
            if(regNo) return res.status(400).json({msg: "The Registration number already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password must contain at least 6 characters long."})
            
            // Encrypt the Password
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, regNumber, specialization, researchArea, role, password: passwordHash
            })

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            sendMail(email, url, "Verify your email address")
            console.log(url)

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
            const check = await Users.findOne({email})
            if(check) return res.status(400).json({msg:"This email already exists."})

            const newUser = new Users({
                name, email, regNumber, specialization, researchArea, password, role
            })

            await newUser.save()

            res.json({msg: "Account has been activated!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    accept: async (req, res) =>{
        try {
            const {name, email, regNumber, specialization, researchArea, password, role} = req.body;

            const newUser = new Users({
                name, email, regNumber, specialization, researchArea, role, password
            })

            await newUser.save()

            res.json({msg: "Successfully Registered...!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    login: async (req, res) =>{
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch)return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

           

            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: '/user/refresh_token',
            //     maxAge: 7*24*60*60*1000 // 7d
            // })

            res.json({result: user, accesstoken,msg: "Login success!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    forgotPassword: async (req, res) => {
        try {
            const {email} = req.body
            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const access_token = createAccessToken({id: user._id})
            const url = `${CLIENT_URL}/user/reset/${access_token}`

            sendMail(email, url, "Reset your password")
            res.json({msg: "Re-send the password, please check your email."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    resetPassword: async (req, res) => {
        try {
            const {password} = req.body
            console.log(password)
            const passwordHash = await bcrypt.hash(password, 12)

            await Users.findOneAndUpdate({_id: req.user.id}, {
                password: passwordHash
            })

            res.json({msg: "Password successfully changed!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUsersAllInfor: async (req, res) => {
        try {
            const users = await Users.find().select('-password')

            res.json(users)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getAllInfo: async (req, res) => {
        try {
            Users.find().exec((err,users) =>{
                if(err){
                  return res.status(400).json({
                    error:err
                  });
                }
                return res.status(200).json({
                  success:true,
                  existingUsers:users
                });
              });
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateUser: async (req, res) => {
        try {
            const {name, image} = req.body
            await Users.findOneAndUpdate({_id: req.user.id}, {
                name, image
            })

            res.json({msg: "Successfully Updated !"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateAUser: async (req,res) => {
        try{
            Users.findByIdAndUpdate(
                req.params.id,
                {
                  $set:req.body
                },
                (err,users)=>{
                  if(err){
                    return res.status(400).json({error:err});
                  }
            
                  return res.status(200).json({
                    success:"updated successfully"
                  });
                }
              );
        }catch{
            return res.status(500).json({msg: err.message})
        }
    },
    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getPanelMembers: async (req, res) => {
        
        const area = req.params.researchArea;
        
        try {
            const users = await Users.find({$and:[{role:"Panel_Member"},{researchArea:area}]}).select('-password')

            res.json(users)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getSupervisorMembers: async (req, res) => {
        
        const area = req.params.researchArea;
        
        try {
            const users = await Users.find({$and:[{role:"Supervisor"},{researchArea:area}]}).select('-password')

            res.json(users)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

}

const createActivationToken = (user) => {
    return jwt.sign(user.toJSON(), process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}

const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

export default userController;