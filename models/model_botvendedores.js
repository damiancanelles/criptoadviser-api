const mongoose = require("mongoose");
const {Schema} = mongoose;

const VendedoresSchema = new Schema(
    {username: {type: String, required: true},
    date:{type: Date, default:Date.now},
    likes:{type: Number, default:0},
    respeto:{type: Boolean, default: false},
    users: {type: Array, default:[]},

    }
);

module.exports = mongoose.model("Vendedores",VendedoresSchema);