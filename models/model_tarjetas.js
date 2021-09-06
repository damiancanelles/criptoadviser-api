const mongoose = require("mongoose");
const {Schema} = mongoose;

const TarjetasSchema = new Schema(
    {name: {type: String, required: true},
    moneda: {type: String, required: true},
    numero: {type: String, require: true},
    date:{type: Date, default:Date.now},
    

    }
);

module.exports = mongoose.model("Tarjetas",TarjetasSchema);