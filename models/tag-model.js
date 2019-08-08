const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tags: [{type:String}]
}, {collection: 'tags', strict: true, versionKey: false}); 

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;