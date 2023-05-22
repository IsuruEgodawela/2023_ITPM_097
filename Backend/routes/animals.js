const express = require ('express');
const Animals = require('../models/Animals');

const router = express.Router();



//save students

router.post('/animal/save', (req,res)=>{

    let newanimal = new Animals(req.body);

    newstudent.save((errA)=>{
        if(errA){
            return res.status(400).json({
                error:errA
            });    
        }
        return res.status(200).json({
            success:"Animals Details Saved Successfully"
        });
    });
});

//get animal
router.get('/animal' , (req,res)=>{
    Animals.find().exec((err,Animals)=>{
        if(err){
        return res.status(400).json({
            error:err
        });
      }
        
      return res.status(200).json({
          success:true,
          existinganimal:Animals
      });

    });
});

// get a specific animals
 router.get("/animal/:id", (req,res) =>{
     let animalId = req.params.id;

     Animals.findById(animalId,(err,Animals)=>{
         if(err){
             return res.status(400).json({success:false , err});
         }

         return res.status(200).json({
             success:true,
             Animals
         });
     });
 } );


//update Animals

router.put('/animal/update/:id' , (req,res)=>{
    Animals.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Animals)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated SuccesFully"
            });
        }
    );
});


//delete animal
router.delete('/animal/delete/:id',(req,res)=>{
    Animals.findByIdAndRemove(req.params.id).exec((err,deleteanimal)=>{
        if(err)return res.status(400).json({
            message:"Delete unSuccessfull",err
        });

        return res.json({
            message:"Delete SuccesFulll" ,deleteanimal
        });
    });
});



module.exports = router;
