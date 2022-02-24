const e = require('express');
const express = require('express');
const router = express.Router();
let players=[
    { "name": "manish",
       "dob": "1/1/1995",
       "gender": "male",
       "city": "jalandhar",
       "sports": ["swimming"],
       "bookings": [{"bookingNumber": 1, "sportId": "","centerId": "","type": "private",
                     "slot": "16286598000000",
                     "bookedOn": "31/08/2021",
                     "bookedFor": "01/09/2021"},
                    {"bookingNumber": 2, "sportId": "","centerId": "", "type": "private",
                     "slot": "16286518000000",
                     "bookedOn": "31/08/2001",
                     "bookedFor": "01/09/2001" },  
   ]
   },
     { "name": "gopal",
       "dob": "1/09/1995",
       "gender": "male",
       "city": "delhi",
       "sports": ["soccer"],
       "bookings": [ ]
   },
     { "name": "lokesh",
       "dob": "1/1/1990",
       "gender": "male",
       "city": "mumbai",
       "sports": ["soccer"],
       "bookings": []
     }
   ]
 
 router.post('/players', function (req,res){
 
 let value=req.body;
 for (let i=0;i<players.length;i++){
     if (players[i].name===value.name){
         res.send("player already exist!")
         return;
     } 
 }
 players.push(value)
 res.send(players)
 })
 //2
router.post('/player/:playerName/bookings/:bookingId',function(req,res){
  let name = req.params.playerName;
    let bookingId = req.params.bookingId;
    let userGivenPlayer = req.body
  
    for(let j=0; j<players.length;j++){
      if(name === players[j].name){
        let bookingArray = players[j].bookings;
        for(let k=0;k<bookingArray.length;k++){
          if(bookingArray[k]===bookingId){
            res.send("booking already exist.")
          }
        }bookingArray.push(userGivenPlayer);
}
    }res.send("No such player exist.")
});
   
   module.exports = router;