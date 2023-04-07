const express = require("express");
const employeeRouter = express.Router();  

const {
    NewEmployee,
    getAllEmployee,
    GetOneEmployee,
    UpdateEmployee,

} = require("../controllers/employee.controller")

employeeRouter.post("/NewEmployee",NewEmployee);
employeeRouter.get("/getAllEmployee",getAllEmployee);
employeeRouter.get("/getEmployee/:employeeID",GetOneEmployee);
employeeRouter.put("/updateEmployee/:employeeID",UpdateEmployee);

module.exports = employeeRouter;