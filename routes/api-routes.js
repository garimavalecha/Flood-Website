const axios = require("axios");
const router = require("express").Router();
const Event = require("../models/event-model");
const Tags = require("../models/tag-model");

router.post("/postEvent", async function(req, res) {
  // res.send("Needs to be implemented, post");
  const {
    fullName,
    longitude,
    latitude,
    mobileNumber,
    address,
    tags,
    title,
    description
  } = req.body;
  try {
    const reqData = {
      address: address,
      description: description,
      name: fullName,
      coordinates: { longitude: longitude, latitude: latitude },
      phone_number: mobileNumber,
      tags: tags,
      title: title
    };
    console.log(reqData);
    const newEvent = new Event(reqData);

    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get("/getAllEvents", async function(req, res) {
  try {
    const events = await Event.find({}, "-id").lean();
    res.json(events);
  } catch (err) {
    res.json({ error: err });
  }
  // res.send("Needs to be implemented, get");
});

module.exports = router;
