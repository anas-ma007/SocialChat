const mongoose = require("mongoose")

const messageScehma = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String,
        default: ""
    },
    seen: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
)

const conversationScehma = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: 'User'
    },
    messages: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Message'
        }
    ],

}, {
    timestamps: true
})


const MessgeModel = mongoose.model("Message", messageScehma)
const ConversationModel = mongoose.model('Conversation', conversationScehma)

module.exports = {ConversationModel, MessgeModel}