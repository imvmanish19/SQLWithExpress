const route = require('express').Router();
const db = require('../db');

route.get('/',(req,res) => {

    db.getAllPersons()
    .then((persons) => {
        res.render('person',{
            persons
        })
    })
    .catch((err) => {
        res.send(err);
    })
});

route.get('/add',(req,res) => {
    res.render('person_add');
});

route.post('/add',(req,res) => {
    db.addPerson(req.body.name,req.body.age,req.body.place)
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        res.send(err);
    })
});

exports = module.exports = {
    route
}