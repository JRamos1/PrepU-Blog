module.exports = function(sequelize, DataTypes) {
    let Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10-50]
            }
        },
        body:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [50-1000]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Education"
        }
    });
        Post.associate = function(models){
            models.post.belongsTo(models.User, {
                foreignKey:{
                    allowNull: false
                }
            });
        };
    return Post;
};