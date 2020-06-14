const route = require('express').Router();
const db = require('../db');

route.get('/',(req,res) => {
    db.getAllPersons()
    .then((persons) => res.send(persons))
    .catch(err => res.send({error:err}));
});

route.post('/',(req,res) => {
    db.addPerson(req.body.name,req.body.age,req.body.place)
    .then(() => res.redirect('/api/'))
    .catch(err => res.send({error:err}));
});

exports = module.exports = {
    route
}