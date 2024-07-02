const UserModel = require("../models/userModel")

const checkEmail = async (req, res) => {
    try {
        const { email } = req.body
        const checkUserExist = await UserModel.findOne({ email }).select("-password") // "select -password" - to avoid send the password field to frontend

        if (!checkUserExist) {
            return res.status(400).json({
                message: "This user is not exists",
                error: true
            })
        }
        return res.status(200).json({
            message: "User is exists",
            success: true,
            data: checkUserExist
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkEmail