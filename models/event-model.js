const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    name: { type: String, trim: true, required: "Name is required." },
    phone_number: { type: Number, required: "Phone Number is required." },
    address: { type: String, required: "Address is required." },
    title: { type: String, required: "Title is required." },
    tags: [{ type: String }],
    coordinates: {
      longitude: { type: String, required: "longitude is required." },
      latitude: { type: String, required: "latitude is required." }
    },
    description: { type: String }
  },
  { collection: "events", strict: true, versionKey: false }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
