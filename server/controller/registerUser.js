
const UserModel = require("../models/userModel")
const bcrypt = require('bcryptjs')

async function registerUser(req, res){
    try {
        const {name, email, password, mobile, profile_pic} = req.body

        const checkEmailExist = await UserModel.findOne({email}) 
        if(checkEmailExist){
            return res.status(400).json({
                message: "Email is already exists",
                error : true
            })
        }

        const salt = await bcrypt.genSalt(10)
        console.log(salt, "=> salt log");
        const hashedPassword = await bcrypt.hash(password, salt)

        const payload = {
            name,
            email,
            mobile,
            profile_pic,
            password : hashedPassword
        }

        const user = new UserModel(payload)

        const userSavedData = await user.save()

        return res.status(201).json({
            message : "User created succefully",
            savedData : userSavedData,
            success : true
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = registerUser