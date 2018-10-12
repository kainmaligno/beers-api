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
    default: 
    "https://4.bp.blogspot.com/-mpolA2Q7jaM/W1kL92a-ZDI/AAAAAAAAAgY/nW6aPvBPCqM8BDQxblMVzQw7jaqgiQyJgCLcBGAs/s640/37768723_1901881233204743_1888854276646633472_n.jpg"
  }
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer

//"https://images.punkapi.com/v2/keg.png"