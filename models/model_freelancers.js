const mongoose = require("mongoose");
const {Schema} = mongoose;

const FreelancersSchema = new Schema(
    {titulo: {type: String, required: true},
    descripcion: {type: String, require: true},
    image: {type: String, require: true},
    date:{type: Date, default:Date.now},
    contactinfo:{type: Object, require: true},
   
    

    }
);

module.exports = mongoose.model("Freelancers",FreelancersSchema);