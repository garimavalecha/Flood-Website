const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {type: String, trim: true, required: "Name is required."},
  phone_number: {type: Number, required: 'Phone Number is required.'},
  address: {type: String, required: 'Address is required.'},
  title: {type: String, required: 'Title is required.'},
  tags: [{type: String, required: 'Tag(s) is(are) required.'}],
  coordinates: {
    latitude: {type: Number, required: 'Latitude is required.'},
    longitude: {type: Number, required: 'Longitude is required.'}
  },
  description: {type: String, required: 'Desription is rrquired.'}
}, {collection: 'events', strict: true, versionKey: false}); 

function arrayLimit(val) {
  return val.length <= 10;
}

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;