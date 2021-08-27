const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");

// make a booking
router.post("/", async (req, res) => {
  try {
    let newBooking = new Booking({
      bookedTrip: req.body.bookedTrip,
      status: req.body.status,
      user: req.body.user,
    });
    const response = await newBooking.save();
    res.json({
      response,
      message: "Booking created",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Booking cannot be created");
  }
});

//get all bookings
router.get("/", async (req, res) => {
  try {
    const bookingsList = await Booking.find()
      .populate("user", "name ")
      .sort({ dateBooked: -1 });

    res.send(bookingsList);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// get user bookings
router.get(`/get/userbookings/:userid`, async (req, res) => {
  const userBookingsList = await Booking.find({ user: req.params.userid })
    .populate("user", "name")
    .populate("bookedTrip", "origin destination time date")
    .sort({ dateOrdered: -1 });

  if (!userBookingsList) {
    res.status(500).json({ success: false });
  }
  res.send(userBookingsList);
});

// delete a booking:
router.delete("/:id", async (req, res) => {
  try {
    let booking = await Booking.findByIdAndRemove(req.params.id);
    if (booking) {
      res.json({ success: true, message: "the booking is deleted!" });
    } else {
      res.status(404).json({ success: false, message: "booking not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot delete booking");
  }
});
module.exports = router;
