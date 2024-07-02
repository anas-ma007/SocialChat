const logout = async (req, res) => {
    try {
        const cookiesOption = {
            http: true,
            secure: true
        }
        return res.cookie('token', "", cookiesOption).status(200).json({
            message: "Session clear",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = logout