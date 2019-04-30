let db = require("../models");
const authController = require('../controllers/authcontroller.js');

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


    //Takes user registration info and sends to "/api/Students" and "/api/Mentors" routes (passport/bcrypt version)
    module.exports = function(app,passport){
    
    
    app.post('/api/Students', passport.authenticate('local-signup',  { successRedirect: '/login',
                                                        failureRedirect: '/index'}
                                                        ));

    app.post('/api/Mentors', passport.authenticate('local-signup',  { successRedirect: '/login',
                                                        failureRedirect: '/index'}
                                                        ));
            
    
    
    app.get('/index',isLoggedIn, authController.index);
    
    
    app.get('/logout',authController.logout);
    
    
    app.post('/login', passport.authenticate('local-signin',  { successRedirect: '/index',
                                                        failureRedirect: '/login'}
                                                        ));
    
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
    
        res.redirect('/login');
    }
    
    
    }
    
/* // Takes user registration info and sends to "/api/Students" route
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
    });*/

    
};