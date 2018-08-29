const mongoose = require('mongoose')
const Beer = require('../models/Beer')

module.exports = app => {

  app.get('/beers/all', async (req, res) => {
    try{
      const Beers = await Beer.find()
    res.status(200).json(Beers)
    }catch(err){
      res.status(404).json({error: 'No Beers found, try with a little vodka'})
    }
  })

  app.get('/beers/single/:id', async (req, res) => {
    try{
      const SeachedBeer = await Beer.findOne({_id: req.params.id})
      res.status(200).json(SeachedBeer)
    }catch(err){
      res.status(404).json({error: 'not beer found'})
    }
  })

  app.get('/beers/random/', async (req, res) => { 
    try{
      const Beers = await Beer.find()
      const selected = Math.floor(Math.random() * Beers.length) + 1
      res.status(200).json(Beers[selected])
    }catch(err){
      res.status(404).json({error: 'not beer found'})
    }
  })

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