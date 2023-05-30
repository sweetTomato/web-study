module.exports =  function(sequelize,DataTypes){
    return sequelize.define('todos',{
        idx:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allwNull:false
        },

        todo_id:{
            type:DataTypes.STRING(250),
        },

        todo_text:{
            type:DataTypes.TEXT,
        },

        todo_show:{
            type:DataTypes.BOOLEAN,
        }
    })
}