
  //load bcrypt
  var bCrypt = require('bcrypt-nodejs');

  module.exports = function(passport,student){

  var Student = student;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function(student, done) {
          done(null, student.id);
      });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      Student.findById(id).then(function(student) {
        if(student){
          done(null, student.get());
        }
        else{
          done(student.errors,null);
        }
      });

  });


  passport.use('local-signup', new LocalStrategy(

    {           
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){
       

      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

       Student.findOne({where: {email:email}}).then(function(student){

      if(student)
      {
        return done(null, false, {message : 'That email is already taken'} );
      }

      else
      {
        var userPassword = generateHash(password);
        var data =
        { email:email,
        password:userPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        major:req.body.major,
        career:req.body.career
        };


        Student.create(data).then(function(newStudent,created){
          if(!newStudent){
            return done(null,false);
          }

          if(newStudent){
            return done(null,newStudent);
            
          }


        });
      }


    }); 



  }



  ));
    
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    
  {

  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
  },

  function(req, email, password, done) {

    var Student = student;

    var isValidPassword = function(userpass,password){
      return bCrypt.compareSync(password, userpass);
    }

    Student.findOne({ where : { email: email}}).then(function (student) {

      if (!student) {
        return done(null, false, { message: 'Email does not exist' });
      }

      if (!isValidPassword(student.password,password)) {

        return done(null, false, { message: 'Incorrect password.' });

      }

      var studentinfo = student.get();

      return done(null,studentinfo);

    }).catch(function(err){

      console.log("Error:",err);

      return done(null, false, { message: 'Something went wrong with your Signin' });


    });

  }
  ));

  }
