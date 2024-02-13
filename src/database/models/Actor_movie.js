module.exports=(sequelize, DataTypes) =>{
    const alias= "Actor_movie";
    const cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true,
        },
        actor_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unsigned:true
        },
        movie_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            unsigned:true
        }

    };
    const config={
        tablename:"Actor_movie",
        timestamps:true

    };

    const Actor_movie= sequelize.define(alias,cols,config);
    return Actor_movie;

}