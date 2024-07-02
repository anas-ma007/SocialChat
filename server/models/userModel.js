const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Provide Name"]
    },
    email: {
        type: String,
        require: [true, "Provide mail"],
        unique: true
    },
    mobile: {
        type: String,
        require: [true, "Provide Mobile Number"]
    },
    password: {
        type: String,
        require: [true, "Provide password"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel