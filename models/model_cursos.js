const mongoose = require("mongoose");
const {Schema} = mongoose;


const CursosSchema = new Schema(
    {
    
    name: {type: String, required: true},
    descripcion:{type: String, required: true},
    price: {type: Number, require: true},
    date:{type: Date, default:Date.now},
    image:{type: String, require: true},
    clases:[{type: Schema.Types.ObjectId, ref: "ClasesI", default:[]}]

    }
);

module.exports = mongoose.model("Cursos",CursosSchema);