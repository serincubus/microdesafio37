const path=require("path");
const db=require("../database/models");

const moviesController={
      
       list:(req,res)=>{
        db.Movie.findAll()
        .then((movies)=>{
            return res.render('moviesList',{movies})
        })
       },
       detail:(req,res)=>{
        id=req.params.id,
        db.Movie.findByPk(id)
         .then(movie =>{
            return res.render('moviesDetail',{movie})
         })
       },
       new:(req,res)=>{
        db.Movie.findAll({
            order:[
                ['release_date', 'DESC']
            ]
        })
        .then(movies=>{
            return res.render('newestMovies',{movies})
        })
       },
       recomended:(req,res)=>{
        db.Movie.findAll({
                  
                order:[
                      ['release_date', 'ASC' ]
                ],
                limit:5
            
        })
        .then(movies=>{
            return res.render('recommendedMovies',{movies})
        })


        }
       }
          



module.exports= moviesController;