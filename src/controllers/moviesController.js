const path=require("path");
const db=require("../database/models");
const { generatePrimeSync } = require("crypto");
const { Association } = require("sequelize");

const moviesController={
      
       list:(req,res)=>{
        db.Movie.findAll()
        .then((movies)=>{
            return res.render('moviesList',{movies})
        })
       },
       detail:(req,res)=>{
        id=req.params.id,
        db.Movie.findByPk(id,{
            include:[{association:'genero'}]})
                 
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


        },
        add:(req,res)=>{
          db.Movie.findAll()

         .then((movies)=>   
         db.Genres.findAll() 
        
        .then((allGeneros)=>{
        return res.render('moviesAdd',{title:"New Movie",movies, allGeneros});

    }))
           
        }, 
        create:(req,res)=>{
            console.log("esto es req.body:", req.body);
            const {title,rating,awards,release_date,length,genre_id} = req.body;
            
            db.Movie.create({
                title,
                rating,
                awards,
                release_date,
                length,
                genre_id
            })
            .then(() =>{
               res.redirect('/movies')
            })
                             
            },
        
            edit:(req,res)=>{
                id=req.params.id
                let promPelicula=db.Movie.findByPk(id);
                let promGenero=db.Genres.findAll()
                
                Promise.all([promPelicula,promGenero]) 
                
                .then(([movie,genres]) =>{
                    console.log("generos:",genres);
                     return res.render('moviesEdit',{movie:movie,genres:genres})
                 })
            },
        
       
            update:(req,res)=>{
                console.log("esto es req.body:",req.body);
                
                const {title, rating, awards, release_date, length,genre_id} = req.body;
                db.Movie.update({
                    title:title,
                    rating:rating,
                    awards:awards,
                    release_date:release_date,
                    length:length,
                    genre_id:genre_id,
                                       
                },{
                    where:{
                        id:req.params.id,
                    }
                })
                   .then(()=>{
                    return res.redirect('/movies')
                })

                },
                destroy:(req,res)=>{
                    
                    db.Movie.destroy({
                        where:{
                            id:req.params.id
                        }
                    })
                     .then(() =>{
                        return res.redirect('/movies')
                     })
                },
               

               
            }

                
module.exports= moviesController;