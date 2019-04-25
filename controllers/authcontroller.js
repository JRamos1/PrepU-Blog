var exports = module.exports = {}


exports.studentRegister = function(req,res){

	res.render('studentRegister'); 

}

exports.mentorRegister = function(req,res){

	res.render('mentorRegister'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}