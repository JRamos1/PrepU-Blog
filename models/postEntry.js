module.exports = function(sequelize, Datatypes){
    let Post = sequelize.define("Post",{
        title:{
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        topic: {
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        description:{
            type: Datatypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        entry:{
            type: Datatypes.TEXT,
            allowNull : false,
            validate:{
                len: [1-500]
            }
        
        }
        
         
    });
            
    Post.associate = function(models){
        Post.belongsTo(models.User,{
            foreignKey: 'user',
            allowNull:false
        })
    }
    Post.associate =function(models){
        Post.hasMany(models.Comment)
    }

    return Post
};