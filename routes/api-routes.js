let db = require("../models");
const authController = require('../controllers/authcontroller.js');

var Session;


module.exports = function (app, passport) {


    app.get("/api/users/:firstName",function(req,res){
        db.User.findAll({
            where:{
                firstName: req.params.firstName
            },
            include:[{
                model:db.Post
            }]
        })
        .then(function(data){
            res.json(data)
        })
    })

    app.get("api/users/:id",function(req,res){
        db.User.findAll({
            where: {
                id: req.user.id
            }
        })
    })

    app.put("/api/users", function(req, res) {
        db.User.update(req.user,
          {
            where: {
              id: req.user.id
            }
          })
          .then(function(data) {
            res.json(data);
          });
      });

    
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

    


    app.get("/api/users",function(req,res){
        db.User.findAll({
            include:[{
                model:db.Post
            }]
        })
        .then(function(data){
            res.json(data)
        })
    })

    app.get('/api/posts/:topic', function(req,res){
        db.Post.findAll({
            include:[{
                model:db.User
            }],
            where:{
                topic: req.params.topic
            }
        })
        .then(function(data){
            res.json(data)
        })
    })
    app.post("/api/Posts", function(req,res){
        db.Post.create({
            title: req.body.title,
            topic: req.body.topic,
            description: req.body.description,
            entry: req.body.entry,
            UserId: req.user.id
        })
        .then(function(data){
            res.json(data)
        })
    })

    app.get("/api/Posts", function (req, res) {
        console.log(req.body)
        db.Post.findAll({
            include:[{
                model:db.User
            }]
        }).then(function (results) {

            res.json(results)
        });
    });

    app.post("/api/comment/:postId",function(req,res){
        db.Comment.create({
            comment: req.body.comment,
            postId: req.params.postId,
            userId: req.user.id,
        })
    })


    app.get("/api/posts/:topic", function(){
        db.Post.findAll({
            where:{
                topic:req.params.topic
            }
        })
        .then(function(data){
            res.json(data)
        })
    })


    // Get all posts by a user
    


    //Takes user registration info and sends to "/api/Users" and "/api/Mentors" routes (passport/bcrypt version)



    app.post('/signup', passport.authenticate('local-signup'),function(req,res) {

        res.setHeader('Content-Type', 'application/json');
        // if(!req.user){
        // console.log(req.user)
        // res.send(JSON.stringify({ url: '/login.html' }));
        // }else{
        // Session = req.user;
        
        res.send(JSON.stringify({ url: '/login.html' }));
        }

);




app.get('/logout', authController.logout);

app.post('/signin', passport.authenticate('local-signin'), function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if(!req.user){
    console.log(req.user)
    res.send(JSON.stringify({ url: '/login.html' }));
    }else{
    Session = req.user;
    console.log(req.user)
    res.send(JSON.stringify({ url: '/loggedIn.html' }));
    }
});

app.get('/console', function(req, res){res.send(Session)});


/* function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/index');

} */


    // app.post('/api/Users', (req, res) => console.log('here', req.body))
/*     app.post('/api/Users', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/index'
    }
    ));



app.get('/index', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if(!req.user){
    res.send(JSON.stringify({ url: '/login.html' }));
    }else{
    res.send(JSON.stringify({ url: '/loggedIn.html' }));
    }
});



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

*/
}

