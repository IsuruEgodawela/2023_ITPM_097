const express = require("express");
const vetRouter = express.Router();  

const {
    Newvet,
    getAllVet,
    GetOneVet,
    UpdateVet,
    DeleteVet,

} = require("../controllers/vet.controller")

vetRouter.post("/Newvet",Newvet);
vetRouter.get("/getAllVet",getAllVet);
vetRouter.get("/GetOneVet/:SpeciesCode",GetOneVet);
vetRouter.put("/UpdateVet/:SpeciesCode",UpdateVet);
vetRouter.delete("/DeleteVet/:SpeciesCode",DeleteVet);

module.exports = vetRouter;