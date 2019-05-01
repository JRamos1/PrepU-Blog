/*  //load bcrypt
 var bCrypt = require('bcrypt-nodejs');

 module.exports = function(passport,Mentor){

 // var Mentor = mentor;
 var LocalStrategy = require('passport-local').Strategy;


 passport.serializeUser(function(mentor, done) {
         done(null, mentor.id);
     });


 // used to deserialize the user
 passport.deserializeUser(function(id, done) {
     Mentor.findOne({where: {id:id}}).then(function(mentor) {
       if(mentor){
         done(null, mentor.get());
       }
       else{
         done(mentor.errors,null);
       }
     });

 });


 passport.use('local-mentorSignup', new LocalStrategy(

   {           
     usernameField : 'email',
     passwordField : 'password',
     passReqToCallback : true // allows us to pass back the entire request to the callback
   },

   function(req, email, password, done){

     var generateHash = function(password) {
     return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
     };
console.log('test' + email)
      Mentor.findOne({where: {email:email}}).then(function(emailTaken){
console.log('testing' + emailTaken)
     if(emailTaken)
     {
       return done(null, false, {message : 'That email is already taken'} );
     }

     else
     {
       var userPassword = generateHash(password);
      var data =
       { email:email,
       password: userPassword,
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       major: req.body.major,
       career: req.body.career
       };

console.log('test2', data)
       Mentor.create(data).then(function(newMentor,created){
         if(!newMentor){
           return done(null,false);
         }

         if(newMentor){
           return done(null,newMentor);
           
         }


       });
     }


   }); 



 }



 ));
   
 //LOCAL SIGNIN
 passport.use('local-mentorSignin', new LocalStrategy(
   
 {

 // by default, local strategy uses username and password, we will override with email
 usernameField : 'email',
 passwordField : 'password',
 passReqToCallback : true // allows us to pass back the entire request to the callback
 },

 function(req, email, password, done) {

   var Mentor = mentor;

   var isValidPassword = function(userpass,password){
     return bCrypt.compareSync(password, userpass);
   }
   Mentor.findOne({ where : { email: email}}).then(function (mentor) {

     if (!mentor) {
       return done(null, false, { message: 'Email does not exist' });
     }

     if (!isValidPassword(mentor.password,password)) {

       return done(null, false, { message: 'Incorrect password.' });

     }

     var mentorinfo = mentor.get();

     return done(null,mentorinfo);

   }).catch(function(err){

     console.log("Error:",err);

     return done(null, false, { message: 'Something went wrong with your Signin' });


   });

 }
 ));

 } */

