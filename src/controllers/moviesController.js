const path=require("path");
const db=require("../database/models");
const { generatePrimeSync } = require("crypto");

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
            const {title,rating,awards,release_date,length} = req.body;
            
            db.Movie.create({
                title,
                rating,
                awards,
                release_date,
                length
            })
            .then(() =>{
               res.redirect('/movies')
            })
                             
            },
        
            edit:(req,res)=>{
                id=req.params.id,
                db.Movie.findByPk(id)
                 .then(movie =>{
                    return res.render('moviesEdit',{Movie:movie})
                 })
            },
       
            update:(req,res)=>{
                console.log("esto es req.body:",req.body);
                
                const {title, rating, awards, release_date, length} = req.body;
                db.Movie.update({
                    title:title,
                    rating:rating,
                    awards:awards,
                    release_date:release_date,
                    length:length
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