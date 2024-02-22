const express = require("express");
const mongoose= require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const adminroute = require("./routes/adminrouteAuth")
const newsportal = require("./routes/adminnewsportalapi")
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kumsuj5:8953729002@newsportal.bguwknk.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', err => {
    console.log("connection failed mongoose");
});
mongoose.connection.on('connected', () => {
    console.log("connected to mongoose");
});

app.use('/api/v1/admin',adminroute);
app.use('/api/v1/admin/newsportal',newsportal);

app.listen(port, () => {
    console.log("Server is running on localhost " + port);
});
