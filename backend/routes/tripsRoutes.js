const express = require("express");
const router = express.Router();
const Trip = require("../models/tripModel");

// get all trips:
router.get("/", async (req, res) => {
  try {
    const tripsList = await Trip.find()
      .populate("user", "name ")
      .sort({ updatedAt: -1 });
    res.send(tripsList);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// get trip by id:
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id).populate("user", "name ");
    res.send(trip);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// get trip by user name
router.get("/get/:userid", async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.params.userid }).populate(
      "user",
      "name"
    );
    res.status(200).json({ success: true, response: trips });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// create a post:
router.post("/", async (req, res) => {
  try {
    let newTrip = new Trip({
      user: req.body.user,
      origin: req.body.origin,
      destination: req.body.destination,
      carType: req.body.carType,
      description: req.body.description,
      price: req.body.price,
      seats: req.body.seats,
      time: req.body.time,
      date: req.body.date,
    });
    const respnse = await newTrip.save();
    res.json({
      respnse,
      message: "Trip created",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Trip cannot be created");
  }
});

// update a Trip:
router.put("/:id", async (req, res) => {
  try {
    let updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    const respnse = await updatedTrip.save();
    res.json({
      respnse,
      message: "Trip updated",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Trip cannot be updated");
  }
});

// delete a Trip:
router.delete("/:id", async (req, res) => {
  try {
    let trip = await Trip.findByIdAndRemove(req.params.id);
    if (trip) {
      res.json({ success: true, message: "the trip is deleted!" });
    } else {
      res.status(404).json({ success: false, message: "Trip not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot delete trip");
  }
});

module.exports = router;
