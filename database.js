const mongoose = require("mongoose");

const URI = "mongodb+srv://criptoadviseradmin:criptoadviser123@criptoadviser.ycgqj.mongodb.net/CriptoADVISER?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

module.exports = mongoose;

