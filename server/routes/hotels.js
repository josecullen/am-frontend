'use strict'

let express = require('express');
let router = express.Router();
let HotelDao = require('../daos/hotels')

router.get('/', function(req, res, next) {
  HotelDao.retrieveAll((hotels) => {
    res.send({ hotels : hotels})
  })
  // En caso de no tener mongo instalado
  // res.send({
  //   "hotels" : [
  //     {
  //       "name"  : "Hotel Emperador",
  //       "stars" : 3,
  //       "price" : 1596,
  //     },
  //     {
  //       "name"  : "Petit Palace San Bernardo",
  //       "stars" : 4,
  //       "price" : 2145
  //     },
  //     {
  //       "name"  : "Hotel Nuevo Boston",
  //       "stars" : 2,
  //       "price" : 861
  //     }
  //   ]
  // })
});

module.exports = router;
