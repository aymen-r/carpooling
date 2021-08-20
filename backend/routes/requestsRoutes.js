const express = require("express");
const router = express.Router();
const RequestTrip = require("../models/requestModel");

// get all requests:
router.get("/", async (req, res) => {
  try {
    const requestsList = await RequestTrip.find()
      .populate("user", "name")
      .sort({ updatedAt: -1 });
    res.send(requestsList);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// get trip by id:
router.get("/:id", async (req, res) => {
  try {
    const request = await RequestTrip.findById(req.params.id).populate(
      "user",
      "name"
    );
    res.send(request);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});
// get trip by user name
router.get("/get/:userid", async (req, res) => {
  try {
    const requests = await RequestTrip.find({
      user: req.params.userid,
    }).populate("user", "name");
    res.status(200).json({ success: true, response: requests });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});
// create a post:
router.post("/", async (req, res) => {
  try {
    let newRequest = new RequestTrip({
      user: req.body.user,
      origin: req.body.origin,
      destination: req.body.destination,
      description: req.body.description,
      seats: req.body.seats,
      time: req.body.time,
      date: req.body.date,
    });
    const respnse = await newRequest.save();
    res.json({
      respnse,
      message: "Request created",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Request cannot be created");
  }
});

// update a Trip:
router.put("/:id", async (req, res) => {
  try {
    let updatedRequest = await RequestTrip.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    const respnse = await updatedRequest.save();
    res.json({
      respnse,
      message: "Request updated",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Request cannot be updated");
  }
});

// delete a Trip:
router.delete("/:id", async (req, res) => {
  try {
    let request = await RequestTrip.findByIdAndRemove(req.params.id);
    if (request) {
      res.json({ success: true, message: "the request is deleted!" });
    } else {
      res.status(404).json({ success: false, message: "request not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot delete trip");
  }
});

module.exports = router;
