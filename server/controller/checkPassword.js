const UserModel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const checkPassword = async (req, res) => {
    try {
        const { password, userId } = req.body
        const user = await UserModel.findById(userId)

        const verifyPassword = await bcrypt.compare(password, user.password)

        if (!verifyPassword) {
            return res.status(400).json({
                message: "Please check password",
                error: true
            })

        }
        const tokenData = {
            id: user._id,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '30d' })
        const cookiesOption = {
            http: true,
            secure: true
        }
        return res.cookie('token', token, cookiesOption).status(200).json({
            message: "Login succesfully",
            data: user,
            token: token,
            success: true

        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message || error + "Error from catch block",
            error: true
        })
    }
}

module.exports = checkPassword