const axios = require('axios');
const router = require('express').Router();
const Event = require('../models/event-model');  
const Tags = require('../models/tag-model');  

router.post('/postEvent', async function(req, res) {
  res.send("Needs to be implemented, post");
});

router.get('/getAllEvents', async function(req, res) {
  try{
    const events = await Event.find({}, '-id').lean()
    res.json(events);
  }catch(err){
    res.json({error: err});    
  }
  // res.send("Needs to be implemented, get");
});

module.exports = router;