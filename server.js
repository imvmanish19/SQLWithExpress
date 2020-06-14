const express = require('express');
const app = express();
const db = require('./db');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine",'hbs');

app.get('/',(req,res) => {

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

app.get('/add',(req,res) => {
    res.render('person_add');
});

app.post('/add',(req,res) => {

});

app.listen(8000,() => {
    console.log("Server Running At Port",8000)
});

