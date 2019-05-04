var exports = module.exports = {}


/* exports.studentRegister = function(req,res){

	res.render('studentRegister'); 

}

exports.mentorRegister = function(req,res){

	res.render('mentorRegister'); 

} */

/* exports.dashboard = function(req,res){
  console.log("authControllerRedirect");
  res.writeHead(307, { Location: '/index' });
  res.end();

} */

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  return res.redirect('/');
  });

}