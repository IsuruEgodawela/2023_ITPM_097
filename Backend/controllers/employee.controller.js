const Employee = require("../models/employee");

//add new employee
const NewEmployee = async (req,res) => {
    const {
        name,dob,gender,contactNo,jobTitle,goodName,PermanentAddress,NIC,email,department,password
    } = req.body;

    const CreateEmployee = new Employee({
        name,dob,gender,contactNo,jobTitle,goodName,PermanentAddress,NIC,email,department,password
    });
    try{
        await CreateEmployee.save();
        res.status(200).json({
            success:true,
            message:"Employee Created Successfully",
            Employee:CreateEmployee,
        });
    } catch(err) {
        res.status(400).json({
            error:err
        });
    }
}

//get all employee
const getAllEmployee = async (req,res) => {
    try {    
        const Employees = await Employee.find();    
        res.status(200).json({      
            success: true,           
            Employee: Employees,    
        });  
    } catch (err) {    
            res.status(400).json({     
                 error: err,    
            });  
        }
}

//get one employee
const GetOneEmployee = async (req,res) =>{
    try {
        const employeeID = req.params.employeeID;
        const Employees = await Employee.findById(employeeID);
        res.status(200).json({      
            success: true,           
            Employee: Employees,    
        }); 

    } catch (err) {
        res.status(400).json({     
            error: err,    
       });      
    }
}
//update employee
const UpdateEmployee = async (req, res) => {
    try {
        const employeeID = req.params.employeeID;
        const updateEmployee = await Employee.findByIdAndUpdate(employeeID,{$set:req.body});
        res.status(200).json({      
            success: true,           
            updateEmployee: updateEmployee,    
        }); 
    } catch (err) {
        res.status(400).json({     
            error: err,    
       });  
    }
}
const DeleteEmployee = (req,res) => {
    Employee.findByIdAndDelete (req.params.employeeID)
    .then((Employees) => {
        res.status(200).json({      
            success: true,           
            message: "Employee Deleted Successfully",
            Employees:Employees,   
        }); 
    })
    .catch ((err) => {
        res.status(400).json({     
            error: err,    
       });  
    })

}

module.exports = {
    NewEmployee,
    getAllEmployee,
    GetOneEmployee,
    UpdateEmployee,
    DeleteEmployee,

};