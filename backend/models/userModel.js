const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true,
  },
});

module.exports = User = mongoose.model("user", userSchema);

// {
//   "name":"aymen",
//   "email":"aymen@example.com",
//   "password":"123",
//   "gender":"male",
//   "phone":"123456789",
//   "address":"gafsa",
//   "isAdmin":true,
// }
