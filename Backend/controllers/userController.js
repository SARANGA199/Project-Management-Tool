const Users = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userController = {
    register: async (req, res) =>{
        try {
            const {name, email, regNumber, specialization, password} = req.body;

            const mail = await Users.findOne({email})
            if(mail) return res.status(400).json({msg: "The email already exists."})

            const regNo = await Users.findOne({regNumber})
            if(regNo) return res.status(400).json({msg: "The Registration number already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password must contain at least 6 characters long."})
            
            // Encrypt the Password
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, regNumber, specialization, password: passwordHash
            })

            // Save to mongodb
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
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}

const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userController