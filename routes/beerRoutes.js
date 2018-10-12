const mongoose = require('mongoose')
const Beer = require('../models/Beer')


module.exports = app => {
 //All the beers
  app.get('/beers/all', async (req, res) => {
    try{
      const Beers = await Beer.find()
    res.status(200).json(Beers)
    }catch(err){
      res.status(404).json({error: 'No Beers found, try with a little vodka'})
    }
  })
 //One single Beer
  app.get('/beers/single/:id', async (req, res) => { //({_id: req.params.id})
    try{
      const SeachedBeer = await Beer.findById(req.params.id)
      res.status(200).json(SeachedBeer)
      console.log(SeachedBeer);
    }catch(err){
      res.status(404).json({error: 'not beer found'})
    }
  })
 //Random Beer
  app.get('/beers/random/', async (req, res) => { 
    try{
      const Beers = await Beer.find()
      const selected = Math.floor(Math.random() * Beers.length) + 1
      res.status(200).json(Beers[selected])
      console.log(Beers[selected]);
    }catch(err){
      res.status(404).json({error: 'not beer found'})
    }
  })
 //ADD a new beer
  app.post('/beers/new', async (req, res) => {
    const {
      id,
      name,
      tagline,
      description
    }= req.body

    const newBeer = new Beer({id, name, tagline, description})

    try{
      const savedBeer = await newBeer.save()
      res.status(200).json({Message: savedBeer})
    }catch(err){
      res.status(500).json({error: 'error creating beer'})
    }
  })
 //FInd a beer 
  app.get('/beers/search', async (req, res) => {
    
    try{
      const BeerSearched = await Beer.find({
        "name" : { $regex: req.query.q, $options: 'i' }
      })
      res.status(200).json(BeerSearched)
    }catch(err){
      res.status(404).json({error: 'not beer found'})
    }
  })

}