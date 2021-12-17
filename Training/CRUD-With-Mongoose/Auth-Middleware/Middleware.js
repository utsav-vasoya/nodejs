const jwt = require("jsonwebtoken");
const verify = (req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        const validtoken = jwt.verify(token, process.env.secretKey)
        if (validtoken) {
            res.user = validtoken
            next()
        } else {
            res.send("token expire")
        }
    } else {
        res.send("token not found ")
    }

}

module.exports = verify; 