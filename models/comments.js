module.exports = function(sequelize, Datatypes){
    let Comment = sequelize.define("Comment",{
        comment:{
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })
    Comment.associate = function(models){
        Comment.belongsTo(models.Post,{
            foreignKey: 'post'
        })
    }

    return Comment
}