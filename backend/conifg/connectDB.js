const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let result = await mongoose.connect("mongodb://localhost:27017/carpool", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
