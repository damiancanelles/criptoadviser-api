const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProductsSchema = new Schema(
    {
    
    name: {type: String, required: true},
    descripcion:{type: String, required: true},
    price: {type: Number, require: true},
    date:{type: Date, default:Date.now},
    image:{type: String, require: true}

    }
);

module.exports = mongoose.model("Products",ProductsSchema);