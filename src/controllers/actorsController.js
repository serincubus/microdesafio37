const path=require('path');
const db=require('../database/models');

const actorsController={
    list:(req,res)=>{
        db.Actors.findAll()
        .then(actors=>{
            return res.render('actorsList',{actors})
        })
    },
    detail:(req,res)=>{
    id=req.params.id;
    db.Actors.findByPk(id)
    .then(actor=>{
        return res.render('actorsDetail',{actor})
    })
    }
}

module.exports=actorsController;