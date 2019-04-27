var exports = module.exports = {}


/* exports.studentRegister = function(req,res){

	res.render('studentRegister'); 

}

exports.mentorRegister = function(req,res){

	res.render('mentorRegister'); 

} */

exports.index = function(req,res){

	res.redirect('index.html'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}