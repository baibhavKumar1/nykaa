const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            let decoded = jwt.verify(token, `${process.env.SECRET}`);
            req.body.userID = decoded.userID;
            return next(); 
        }
        else {
            return res.status(400).send("Log in");
        }
    } catch (err) {
        return res.status(400).json({ "message": err.message });
    }
}

module.exports = auth;