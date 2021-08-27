const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  bookedTrip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trip",
    required: true,
  },

  status: {
    type: String,
    required: true,
    default: "Pending",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  dateBooked: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Booking = mongoose.model("booking", bookingSchema);
