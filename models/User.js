module.exports = function(sequelize, Datatypes){
    let User = sequelize.define("User",{
        firstName:{
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len:{
                    args:[6, 128],
                    msg: "Email address must be between 6 and 128 characters!"
                },
                isEmail: {
                    msg: "Must enter a valid Email address!"
                }
            },
            unique: {
                args: true,
                msg: "Email address already in use!"
            }   
        },
        password:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len: [1-20]
            }
        },
       

        occupation:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len: [1-50]
            }
        },
        major:{
            type: Datatypes.STRING,
            allowNull : false,
            validate:{
                len: [1-50]
            }
        },


    });
    return User
};