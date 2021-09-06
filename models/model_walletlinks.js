const mongoose = require("mongoose");
const {Schema} = mongoose;

const WalletsSchema = new Schema(
    {name: {type: String, required: true},
    link: {type: String, require: true},
    image: {type: String, require: true},
    date:{type: Date, default:Date.now},
    

    }
);

module.exports = mongoose.model("Wallets",WalletsSchema);