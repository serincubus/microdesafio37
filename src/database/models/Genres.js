module.exports=(sequelize,DataTypes)=>{
    const alias="Genres";
    const cols={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true
    },
        name:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        ranking:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            unsigned:true
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    };
    const config={
          tablename:"Genres",
          timastamps:true,
          createdAt: 'created_at',
          updatedAt: 'updated_at'    
    };
    const Genres=sequelize.define(alias,cols,config);
    return Genres;
}