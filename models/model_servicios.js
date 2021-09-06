const mongoose = require("mongoose");
const {Schema} = mongoose;

const ServiciosSchema = new Schema(
    {titulo: {type: String, required: true},
    descripcion: {type: String, require: true},
    price: {type: Number, require: true},
    media: {type: String, require: true},
    date:{type: Date, default:Date.now},
    image: {type: String, require: true},
    contactinfo:{type: Object, require: true},
    }
);

module.exports = mongoose.model("Servicios",ServiciosSchema);