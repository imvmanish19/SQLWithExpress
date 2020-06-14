const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine",'hbs');

app.use('/pages',require('./routes/pages').route);
app.use('/api',require('./routes/api'));

app.listen(8000,() => {
    console.log("Server Running At Port",8000)
});