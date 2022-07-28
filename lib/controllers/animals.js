const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const animal = await Animal.getById(req.params.id);
    res.json(animal);
  })
  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    const ids = animals.map((animal) => ({ id: animal.id, name: animal.name, type: animal.type, gender: animal.gender, voice: animal.voice }));
    res.json(ids);
  });
