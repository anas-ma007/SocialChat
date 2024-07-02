const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

const userDetails = async (req, res)=>{
    try {
        const token  = req.cookies.token || ""
        console.log(token, "token from cookie");
        const user = await getUserDetailsFromToken(token)
        return res.status(200).json({
            message : "got the user details succefully",
            success : true,
            data : user
        })

    } catch (error) {
        return res.status(400).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = userDetails