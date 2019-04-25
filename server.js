
const express = require("express")

const app = express()

const PORT = process.env.PORT || 8080

const db = require("./models")

const parser = require("body-parser")

app.use(parser.json())
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});
