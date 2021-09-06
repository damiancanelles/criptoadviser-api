const mongoose = require("mongoose");
const {Schema} = mongoose;

const NoticiasSchema = new Schema(
    {titulo: {type: String, required: true},
    descripcion: {type: String, require: true},
    media: {type: String, require: true},
    date:{type: Date, default:Date.now},
    image: {type: String, require: true},

    }
);

module.exports = mongoose.model("Noticias",NoticiasSchema);