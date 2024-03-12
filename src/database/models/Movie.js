module.exports= (sequelize,DataTypes) => {
    const alias="Movie";
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            unsigned:true,
            autoIncrement:true
        },
        title:{
            type: DataTypes.STRING(500),
            allowNull:false
        },
        rating:{
            type: DataTypes.DECIMAL,
            allowNull: false,
            unsigned: true
        },
        awards:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigned:true
        },
        release_date:{
            type: DataTypes.DATE,
            allowNull:false
        },
        length:{
            type: DataTypes.INTEGER,
            unsigned: true
        },
        genre_id:{
            type: DataTypes.INTEGER,
            unsigned:true
        }

    };
    const config = {
        tablename:"movies_db",
        timestamps:false,
       /* createdAt: 'created_at',
        updatedAt: 'updated_at'*/
    };
        
    const Movie= sequelize.define(alias,cols,config)

    Movie.associate= function(models) {
        Movie.belongsTo(models.Genres,{
          as: 'genero',
          foreignKey: 'genre_id'
        }),
        Movie.belongsToMany(models.Actors,{
            as:'actores',
            through:'Actor_movie',
            foreignKey:'actor_id',
            otherKey:'movie_id',
            createdAt: 'created_at',
            updateAt:'updated_at'
        })
    }
    return Movie;

}