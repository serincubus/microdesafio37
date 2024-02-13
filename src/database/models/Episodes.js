module.exports=(sequelize,DataTypes) =>{
    const alias="Episodes";
    const cols={
        id:{
           type: DataTypes.INTEGER,
           primaryKey:true,
           allowNull:false,
           unsigned:true,
           autoIncrement:true
        },
        title:{
            type:DataTypes.STRING(500),
        },
        number:{
            type:DataTypes.INTEGER,
            unsigned:true    
        },
        release_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        rating:{
            type:DataTypes.DECIMAL(3,1),
            allowNull:false
        },
        season_id:{
            type:DataTypes.INTEGER,
            unsigned:true
        }


    };
    const config={
           tablename:"Episodes",
           timesstamps:true 
    };
    const Episodes=sequelize.define(alias,cols,config)
    return Episodes;
    }