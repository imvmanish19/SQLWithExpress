const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine",'hbs');

app.get('/',(req,res) => {
    res.render('person',{
        persons: [
            {name:'Manish V',age: 19,place: 'Bangalore'},
            {name:'Virat',age: 21,place: 'Delhi'}
        ]
    })
});

app.listen(8000,() => {
    console.log("Server Running At Port",8000)
});

