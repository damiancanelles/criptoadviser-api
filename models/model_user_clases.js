const mongoose = require("mongoose");
const {Schema} = mongoose;


const UCSchema = new Schema(
    {
    
    user:{type: Schema.Types.ObjectId, ref: "Users"},
    curso:{type: Schema.Types.ObjectId, ref: "Cursos"}

    }
);

module.exports = mongoose.model("UC",UCSchema);