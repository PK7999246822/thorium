const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

// 1. this api will fetch all movies from array

router.get('/movies', function(req, res){
    res.send('["pushpa","dhamal","don","krish","kalia"]')
});

// //2. this api will feth all movie by indexid from array

router.get('/movie/:movieId', function(req,res){
    movi1 = ["pushpa","dhamal","don","krish","kalia"]
    let value = req.params.movieId;
    if(value>movi1.length-1){
        res.send('"movie doesnt exist"')
    } else {
        res.send(movi1[value])
    }
})

// //3. this api will fetch all movies from array all objects

router.get('/movies', function(req, res){
    res.send( {id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies'}, {id: 3,name: 'Rang de Basanti'}, {id: 4,name: 'Finding Nemo'} )
});


// 4. this api will fetch all movies from array of objects by index id

router.get('/films/:filmId', function(req,res){
    let movi = [ {id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies'}, {id: 3,name: 'Rang de Basanti'}, {id: 4,name: 'Finding Nemo'} ]
    let value = req.params.filmId;
    let found = false;
    for(i=0;i<movi.length;i++){
        if( movi[i].id==value){
            found = true
            res.send(movi[i])
            break
        }
    }
    if(found == false){
        res.send('No movie exists with this id')
    } 
    });

module.exports = router;
