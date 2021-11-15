const mongoose = require("mongoose");
const {Schema} = mongoose;

const ClasesISchema = new Schema(
    {titulo: {type: String, required: true},
    descripcion: {type: String, require: true},
    link: {type: String, require: true},
    date:{type: Date, default:Date.now},
    datestart:{type: Date, require: true},
    duracion:{type: String, require: true},
    file: {type: String, default:""},

    }
);

module.exports = mongoose.model("ClasesI",ClasesISchema);