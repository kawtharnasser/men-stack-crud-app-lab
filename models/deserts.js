const mongoose = require('mongoose')

const desertSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean
})

const Desert = mongoose.model('Desert',desertSchema)

module.exports = Desert