let db = require("../models");

module.exports = function(app) {
// Gets user information based on id param    
    app.get("/api/users/:id", function (req, res){
        db.User.findAll({
            where:{
                id: req.params.id
            } 
        }).then(function(results){
            res.json(results)
        });
    });
// Get all posts by a user
    app.get("/api/posts/:user", function (req, res){
        db.Post.findAll({
            where:{
                user: req.params.user
            }
        }).then(function(results){
            res.json(results)
        });
    });
// Takes user registration info and sends to "/api/users" route
    app.post("/api/users", function(req, res){
        db.User.create(req.body).then(function(results){
            res.json(results)
        });
    });
    
};