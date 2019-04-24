let db = require("../models");

module.exports = function(app) {
// Gets user information based on id param    
    app.get("/api/Students/:id", function (req, res){
        db.Student.findAll({
            where:{
                id: req.params.id
            }
        }).then(function(results){
            res.json(results)
        });
    });

    app.get("/api/Mentors/:id", function(req, res){
        db.Mentor.findAll({
            where:{
                id: req.params.id
            }
        })
    })

    app.get("/api/Mentors", function(req, res){
        console.log(req.body)
        db.Mentor.findAll({}).then(function(results){
            
            res.json(results)
        });
    });
// Get all posts by a user
    app.get("/api/Students", function (req, res){
        console.log(req.body)
        db.Student.findAll({}).then(function(results){

            res.json(results)
        });
    });

    
// Takes user registration info and sends to "/api/Students" route
    app.post("/api/Students", function(req, res){
        console.log(req.body);
        db.Student.create({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            major:req.body.major,
            career:req.body.career
        })
        .then(function(data){
            res.json(data)
        })
    })


    app.post("/api/Mentors", function(req, res){
        db.Mentor.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            major: req.body.major,
            career: req.body.career
        })
        .then(function(results){
            res.json(results)
        });
    });

    
};