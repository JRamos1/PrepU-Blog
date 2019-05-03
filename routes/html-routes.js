let path = require("path");


module.exports = function(app){
/*     app.get("/index", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    }); */

    
    app.get("/login", function(req, res){
        res.sendFile(path.join(__dirname, "../public/login.html"))
    })

    app.get("/profile", function(req, res){
        res.sendFile(path.join(__dirname, "../public/profile.html"))
    })

    app.get("/loggedIn", function(req, res){
        res.sendFile(path.join(__dirname, "../public/loggedIn.html"))
    })
    
};

