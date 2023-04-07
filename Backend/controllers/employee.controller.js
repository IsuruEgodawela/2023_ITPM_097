const Employee = require("../models/employee");

//add new employee
const NewEmployee = async (req,res) => {
    const {
        name,dob,
        gender,
        //contactNo,jobTitle,goodName,PermanentAddress,NIC,email,department,password
    } = req.body;

    const CreateEmployee = new Employee({
        name,dob,gender
        //,contactNo,jobTitle,goodName,PermanentAddress,NIC,email,department,password
    });
    try{
        await CreateEmployee.save();
        res.status(200).json({
            success:true,
            message:"Employee Created Successfully",
            Employee:CreateEmployee,
        });
    }catch(err){
        res.status(400).json({
            error:err
        });
    }
}

module.exports ={
    NewEmployee
}