'use strict'
var mongoose = require('mongoose')

var hotelSchema = mongoose.Schema({
  name : String,
  stars: { type: Number, max : 5, min : 1 },
  price: Number
})

module.exports = mongoose.model('Hotel', hotelSchema)
