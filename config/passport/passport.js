 //load bcrypt
 var bCrypt = require('bcrypt-nodejs');

 module.exports = function(passport,User){

 // var User = user;
 var LocalStrategy = require('passport-local').Strategy;


 passport.serializeUser(function(user, done) {
         done(null, user.id);
     });


 // used to deserialize the user
 passport.deserializeUser(function(id, done) {
     User.findOne({where: {id:id}}).then(function(user) {
       if(user){
         done(null, user.get());
       }
       else{
         done(user.errors,null);
       }
     });

 });


 passport.use('local-userSignup', new LocalStrategy(

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
      User.findOne({where: {email:email}}).then(function(emailTaken){
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
       occupation: req.body.occupation
       };

console.log('test2', data)
       User.create(data).then(function(newUser,created){
         if(!newUser){
           return done(null,false);
         }

         if(newUser){
           return done(null,newUser);
           
         }


       });
     }


   }); 



 }



 ));
   
 //LOCAL SIGNIN
 passport.use('local-userSignin', new LocalStrategy(
   
 {

 // by default, local strategy uses username and password, we will override with email
 usernameField : 'email',
 passwordField : 'password',
 passReqToCallback : true // allows us to pass back the entire request to the callback
 },

 function(req, email, password, done) {

   var User = user;

   var isValidPassword = function(userpass,password){
     return bCrypt.compareSync(password, userpass);
   }
   User.findOne({ where : { email: email}}).then(function (user) {

     if (!user) {
       return done(null, false, { message: 'Email does not exist' });
     }

     if (!isValidPassword(user.password,password)) {

       return done(null, false, { message: 'Incorrect password.' });

     }

     var userinfo = user.get();

     return done(null,userinfo);

   }).catch(function(err){

     console.log("Error:",err);

     return done(null, false, { message: 'Something went wrong with your Signin' });


   });

 }
 ));

 }