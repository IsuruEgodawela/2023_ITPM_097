const express = require("express");
const employeeRouter = express.Router();  

const {
    NewEmployee,
    getAllEmployee,
    GetOneEmployee,
    UpdateEmployee,
    DeleteEmployee,

} = require("../controllers/employee.controller")

employeeRouter.post("/NewEmployee",NewEmployee);
employeeRouter.get("/getAllEmployee",getAllEmployee);
employeeRouter.get("/getEmployee/:employeeID",GetOneEmployee);
employeeRouter.put("/updateEmployee/:employeeID",UpdateEmployee);
employeeRouter.delete("/DeleteEmployee/:employeeID",DeleteEmployee);

module.exports = employeeRouter;