    let db = require("../models");
const authController = require('../controllers/authcontroller.js');


module.exports = function (app, passport) {
    // Gets user information based on id param    
    app.get("/api/Users/:id", function (req, res) {
        db.User.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results)
        });
    });

    app.get("/api/Posts/:id", function (req, res) {
        db.Post.findAll({
            where: {
                id: req.params.id
            }
        })
    })

    app.get("/api/Posts", function (req, res) {
        console.log(req.body)
        db.Post.findAll({}).then(function (results) {

            res.json(results)
        });
    });
    // Get all posts by a user
    app.get("/api/Users", function (req, res) {
        console.log(req.body)
        db.User.findAll({}).then(function (results) {

            res.json(results)
        });
    });


    //Takes user registration info and sends to "/api/Users" and "/api/Mentors" routes (passport/bcrypt version)

    // app.post('/api/Users', (req, res) => console.log('here', req.body))
    app.post('/api/Users', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/index'
    }
    ));



    app.get('/redir1', isLoggedIn);


    app.get('/logout', authController.logout);


    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/index',
        failureRedirect: '/login'
    }
    ));

function sendindex(){
    res.sendfile("/index")
}


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            sendindex()
            console.log("loggedIn")

            res.redirect('/index');
        } else {
            console.log("notLoggedIn");

            res.redirect('/login');
        }
    }


}

