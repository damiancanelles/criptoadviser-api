const mongoose = require("mongoose");
const {Schema} = mongoose;

const TransaccionsSchema = new Schema(
    {username: {type: String, required: true},
    monto:{type: Number, required: true},
    hash: {type: String, require: true},
    date:{type: Date, default:Date.now},
    subscription: {type:Date, require: true},
    idwallet:{type:String, require: true},
    confirmation:{type:Boolean, default:false},
    }
);

module.exports = mongoose.model("Transaccions",TransaccionsSchema);