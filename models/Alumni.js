module.exports =function(sequelize, Datatypes){
    let Alumni = sequelize.define("Alumni", {
        firstName:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len: [5-20]
            }
        },
        lastName:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len: [5-20]
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
               type:  Datatypes.STRING,
               allowNull: false,
               len:[5-20]
            },
            major:{
                type: Datatypes.STRING,
                allowNull : false,
                validate:{
                    len: [6-50]
                }
            },
    
            career:{
                type: Datatypes.STRING,
                allowNull: false,
                validate:{
                    len: [6-50]
                }
            }
});
return Alumni
};