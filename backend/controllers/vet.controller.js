const Vet = require("../models/vet");

const Newvet = async (req, res) => {
    const {
        code,
        name,
        date,
        location,
        severity,
        tplan,
        recovery,
        rplan,
        other,
        image
    } = req.body;

    const CreateVet = new Vet({
        code,
        name,
        date,
        location,
        severity,
        tplan,
        recovery,
        rplan,
        other,
        image
    });
    try{
        await CreateVet.save();
        res.status(200).json({
            success:true,
            message:"Injured Species Added Successfully",
            Vet:CreateVet,
        });
    } catch(err) {
        res.status(400).json({
            error:err
        });
    }
}

//get all vet
const getAllVet = async (req,res) => {
    try {    
        const Vets = await Vet.find();    
        res.status(200).json({      
            success: true,           
            Vet: Vets,    
        });  
    } catch (err) {    
            res.status(400).json({     
                 error: err,    
            });  
        }
}

//get one vet
const GetOneVet = async (req,res) =>{
    try {
        const SpeciesCode = req.params.SpeciesCode;
        const Vets = await Vet.findById(SpeciesCode);
        res.status(200).json({      
            success: true,           
            Vet: Vets,    
        }); 

    } catch (err) {
        res.status(400).json({     
            error: err,    
       });      
    }
}
//update vet
const UpdateVet = async (req, res) => {
    try {
        const SpeciesCode = req.params.SpeciesCode;
        const updateVet = await Vet.findByIdAndUpdate(SpeciesCode,{$set:req.body});
        res.status(200).json({      
            success: true,           
            updateVet: updateVet,    
        }); 
    } catch (err) {
        res.status(400).json({     
            error: err,    
       });  
    }
}
//delete vet
const DeleteVet = (req,res) => {
    Vet.findByIdAndDelete (req.params.SpeciesCode)
    .then((Vets) => {
        res.status(200).json({      
            success: true,           
            message: "Injured Species Deleted Successfully",
            Vets:Vets,   
        }); 
    })
    .catch ((err) => {
        res.status(400).json({     
            error: err,    
       });  
    })

}

module.exports = {
    Newvet,
    getAllVet,
    GetOneVet,
    UpdateVet,
    DeleteVet,

};