module.exports = app => {
  const individuals = require('../controllers/individual.controller');

  var router = require('express').Router();

  app.use('/api/individuals', router);

  router.post("/", individuals.create); // Create a new Individual

  router.get("/", individuals.findAll); // Retrieve all Individuals

  router.get("/published", individuals.findAllPublished);  // Retrieve all published Individuals
 
  router.get("/:id", individuals.findOne);  // Retrieve a single Individual with id

  router.put("/:id", individuals.update);  // Update a Individual with id

  router.delete("/:id", individuals.delete);  // Delete a Individual with id

  router.delete("/", individuals.deleteAll); // Delete a new Individual
}