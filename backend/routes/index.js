var express = require('express');
var router = express.Router();
const DVD = require('../models/dvd.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dvd/add', function(req, res, next) {

  console.log("req", req.body)

  var newDVD = new DVD({
    name: req.body.name,
    adresse: req.body.adresse,
    nameFilm: req.body.nameFilm,
    dateLocation: req.body.dateLocation,
    dateLocationEnd: req.body.dateLocationEnd,
  });

  newDVD.save(function(err, dvd){
    if (err) {
      console.log("/dvd/add ERR (Interne)", err)
      res.status(500).json({
        "text" : "Erreur Interne !",
        "code" : 500
      });
    }else{
      res.json({
        "dvd": dvd,
        "code" : 200,
      })       
    }
  })
});

router.post('/dvd/view', function(req, res, next) {

  var request = DVD.find();
  
  request.then(dvd => { 
    res.json({
      "dvdList": dvd,
      "code" : 200,
    })
  }).catch(err => {
    console.log("/dvd/view EROOR (Interne)", err)
    res.status(500).json({
      "text" : "Erreur Interne !",
      "code" : 500
    });
  })
});

router.post('/dvd/view', function(req, res, next) {

});

module.exports = router;
