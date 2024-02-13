module.exports= (sequelize,DataTypes) =>{
    const alias= "Actor_episode";
    const cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unsigned:true,
            autoIncrement:true
        },
        actor_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
            unsigned:true
        },
        episode_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
            unsigned:true
        }

    };
    const config={
         tablename:"Actor_episode",
         timestamps: true
    };
    const Actor_episode=sequelize.define(alias,cols,config);
    return Actor_episode;

}