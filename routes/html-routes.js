let path = require("path");


module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/StudentReg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/StudentReg.html"));
    });

    app.get("/MentorReg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/MentorReg.html"));
    });
};

