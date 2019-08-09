const axios = require('axios');
const router = require('express').Router();
const Event = require('../models/event-model');  

router.post('/postEvent', async function(req, res) {
  try{
    const event = new Event(req.body).save(async (err, event) => {
      if (err) {
        res.json({success: false, error: err});
        return;
      }
      const events = await Event.find({}, '-id').lean();
      res.json({success: true, events});
    });
  }
  catch(err) {
    res.json({success: false, error: err});
  }
});

router.get('/getAllEvents', async function(req, res) {
  try{
    const events = await Event.find({}, '-id').lean()
    res.json(events);
  }catch(err){
    res.json({error: err});    
  }
});

module.exports = router;