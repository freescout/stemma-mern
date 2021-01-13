const db = require('../models')

const Individual = db.individuals;
const Partnerships = db.partnerships;

exports.create = (req, res) => {
  console.log("Printing body", req.body);
  // Create a member
  const individual = new Individual({
    name: {
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      nickName: req.body.nickName,
    },
    gender: req.body.gender,
    date: req.body.dateOfBirth,
    place: req.body.placeOfBirth,
    parents: [{
      id: req.body.father,
      role: 'father'
    }, 
    {
      id: req.body.mother,
      role: 'mother'
    }]
  })
}
