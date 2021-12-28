const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const UsersSchema = new Schema(
    {user: {type: String, required: true},
    telegramuser: {type: String, required: true},
    password: {type: String, require: true},
    email: {type:String, require: true},
    role: {type:String, default:"user"},
    subscription: {type: Date, default: Date.now},
   date:{type:Date, default:Date.now},
   activate:{type:Boolean, default:false},
   referido: {type: String, default:""},
   link: {type: String, default:""},
   lending: {type: Number, default:0},
   señales: {type: String, default:""},
     }
);

UsersSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

UsersSchema.methods.GetSignJWT = function() {
    return jwt.sign({ id:this._id}, "secret", {expiresIn: "24h"})
};

module.exports = mongoose.model("Users",UsersSchema);