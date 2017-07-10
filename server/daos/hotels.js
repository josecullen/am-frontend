'use strict'
let Hotel = require('../models/hotels')

function retrieveAll(callback){
  Hotel.find({}, (err, result) => {
    if(err) throw new Error(err)
    callback(result)
  })
}

module.exports = {
  retrieveAll : retrieveAll
}
