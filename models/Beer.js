const mongoose = require('mongoose')
const { Schema } = mongoose

const beerSchema = new Schema({
  id: String,
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  "first_brewed": { type: Date, default: Date.now },
  "tagline": String,
  "description": String,
  "image_url": {
    type: String,
    default: "https://images.punkapi.com/v2/keg.png"
  }
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer