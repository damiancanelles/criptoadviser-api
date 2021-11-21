const mongoose = require("mongoose");
const {Schema} = mongoose;

const TransacSchema = new Schema(
    {username: {type: String, required: true},
    monto:{type: Number, required: true},
    image: {type: String, require: true},
    date:{type: Date, default:Date.now},
    subscription: {type:Date, require: true},
    moneda:{type:String, require: true},
    confirmation:{type:Boolean, default:false},
    ref:{type:String, require: true},
    }
);

module.exports = mongoose.model("TransaccionsMC",TransacSchema);