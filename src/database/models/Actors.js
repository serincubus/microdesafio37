module.exports=(sequelize,DataTypes) =>{
    const alias="Actors";
    const cols={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unsigned:true,
            autoIncrement:true
        },
        first_name:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rating:{
            type:DataTypes.DECIMAL(3,1)
        },
        favorite_movie_id:{
            type:DataTypes.INTEGER,
            unsigned:true
        }

    };
    const config={
                  tablename:"Actors",
                  timestamps:true,
                  createdAt: 'created_at',
                  updatedAt: 'updated_at'

    };

    const Actors= sequelize.define(alias,cols,config);
    /*Actors.associate= function(models) {
        Actors.belongsToMany(models.Movie,{
            as:'peliculas',
            through:'Actor_movie',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            createdAt: 'created_at',
            updateAt:'updated_at'
        })
    }*/
    return Actors;

}