const express = require("express");
const employeeRouter = express.Router();  

const {
    NewEmployee,
    getAllEmployee,
    GetOneEmployee,

} = require("../controllers/employee.controller")

employeeRouter.post("/NewEmployee",NewEmployee);
employeeRouter.get("/getAllEmployee",getAllEmployee);
employeeRouter.get("/getEmployee/:employeeID",GetOneEmployee);

module.exports = employeeRouter;