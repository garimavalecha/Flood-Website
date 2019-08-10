const axios = require('axios');
const router = require('express').Router();
const Event = require('../models/event-model');  

router.post('/postEvent', async function(req, res) {
  try{
    const event = new Event({
      name : req.body.name,
      phone_number : req.body.phone_number,
      address : req.body.address,
      title : req.body.title,
      tags : req.body.tags,
      description : req.body.description,
    }).save(async (err, event) => {
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
    // res.json(events);
    res.render('../views/test.pug',{events:events})
  }catch(err){
    res.json({error: err});    
  }
});

module.exports = router;