const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/criptoadviserdb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

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

