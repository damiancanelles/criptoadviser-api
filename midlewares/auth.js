const jwt = require('jsonwebtoken');
const User = require("../models/model_users");

exports.protect = async (req,res,next) => {
    let token;
    if (
        req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    

    try {
        const decoded = jwt.decode(token,"secret");
        req.User = User.findById(decoded.id);
        next();
    } catch(err) {
        console.log(err);
    }  }