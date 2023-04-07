const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
      name:{    
        type: String,   
        required : true,  
      },  
      dob: {
         type: String, 
         requied: true,  
      },  
      gender:{   
         type: String,    
         required : true,  
      }, 
    //   contactNo:{   
    //       type: String,  
    //       required : true,  
    //   },  
    //   jobTitle:{    
    //      type: String,  
    //      requied : true, 
    //   },
    //   goodName:{
    //       type: String,  
    //       required : true, 
    //   }, 
    //   PermanentAddress:{   
    //       type: String,   
    //       required : true, 
    //   },  
    //   NIC:{   
    //       type: String,   
    //       required : true, 
    //   },  
    //   email:{    
    //       type: String, 
    //       required : true,  
    //   },  
    //   department:{    
    //      type: String,  
    //      required : true, 
    //   },  
    //   password:{    
    //      type: String,    
    //      required : true,  
    //    },


})
module.exports = mongoose.model("employee",EmployeeSchema)

