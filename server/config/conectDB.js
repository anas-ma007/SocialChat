const mongoose = require("mongoose")


let connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("Connect to DB");
        })
        connection.on("error", (error) => {
            console.log("Something error happen in mongodb, Error is ", + error);
        })
    } catch (error) {
        console.log("Something is wrong", error);
    }
}

module.exports = connectDB