const path=require("path");
const db=require("../database/models");

const genresController={
      
    list:(req,res)=>{
        db.Genres.findAll()
        .then(genres=>{
           return res.render('genresList',{genres})
        })

    },
    detail:(req,res)=>{
        id=req.params.id;
        db.Genres.findByPk(id)
        .then(genre=>{
            return res.render('genresDetail',{genre})
        })
    }
}

module.exports=genresController;
