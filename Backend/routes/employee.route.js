const express = require("express");
const employeeRouter = express.Router();  

const {
    NewEmployee
} = require("../controllers/employee.controller")

employeeRouter.post("/NewEmployee",NewEmployee)



module.exports = employeeRouter;