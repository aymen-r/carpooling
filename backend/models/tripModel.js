const mongoose = require("mongoose");

const tripSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    carType: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    seats: { type: Number, required: true },
    time: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Trip = mongoose.model("trip", tripSchema);
