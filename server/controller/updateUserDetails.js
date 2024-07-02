const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")
const UserModel = require("../models/userModel")

const updateUserDetails = async (req, res) => {
    try {
        const token = req.cookies.token || ''
        const user = await getUserDetailsFromToken(token)
        const { name, profile_pic, mobile } = req.body
        // console.log(user, "user log in update user method");
        const updateUser = await UserModel.updateOne({ _id: user._id }, {
            name, 
            profile_pic,
            mobile
        })

        const userInformation = await UserModel.findById(user._id)
        return res.status(200).json({
            message: "Profile updated successfully",
            data: userInformation,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }

}

module.exports = updateUserDetails