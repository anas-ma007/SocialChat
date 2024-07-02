
const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel")
require("dotenv").config()


const getUserDetailsFromToken = async (token) => {
    if (!token) {
        return {
            message: "Session out",
            logout: true
        }
    }

const decode = await jwt.verify(token, process.env.JWT_SECRET)
// console.log(decode, "deocde log in getUserDatils method in helpers");
const user = await UserModel.findById(decode.id).select("-password")

return user
}

module.exports = getUserDetailsFromToken