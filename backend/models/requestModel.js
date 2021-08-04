const mongoose = require("mongoose");

const RequestTripSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    description: { type: String, required: true },
    seats: { type: Number, required: true },
    time: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = RequestTrip = mongoose.model(
  "request_Trip",
  RequestTripSchema
);
