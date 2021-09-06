const mongoose = require("mongoose");
const {Schema} = mongoose;

const Notificaciones = new Schema(
    {
    preview:{type: String, required: true},
    content:{type: String, required: true},
    userid: {type: String, require: true},
    date:{type: Date, default:Date.now},

    }
);

module.exports = mongoose.model("Notificaciones",Notificaciones);