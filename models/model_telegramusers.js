const mongoose = require("mongoose");
const {Schema} = mongoose;

const Telegram = new Schema(
    {telegramuser: {type: String, required: true},
    chatid:{type: String, required: true},}
);

module.exports = mongoose.model("Telegram",Telegram);