
const express = require("express")
const passport   = require('passport')
const session    = require('express-session')


const app = express()

const PORT = process.env.PORT || 8080

const db = require("./models")

const parser = require("body-parser")

const env = require('dotenv').load();

app.use(parser.json())
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session());


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);


db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});

//Models
const models = require("./models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
