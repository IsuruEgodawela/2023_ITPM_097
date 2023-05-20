const mongoose = require ('mongoose');
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    userName :{
        type : String,
        required : true
    
      },
      email:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Please enter valid Email address");
          }
        },
      },
      pwd: {

        type: String,
        required: true,
        trim: true,
    },
    
    tokens: [
        {
        token: {
            type: String,
            required: true,
        },
        },
    ],   
      
},  {timestamps:true});


// @Action - encrypt the password
userSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
  });

  // @Action - Get auth token
  userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, "jwtSecret");
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};


// @Action - Find user by credentials
userSchema.statics.findByCredentials = async (email, pwd) => {
    const user1 = await user.findOne({ email });
    if (!user1) {
      throw new Error("Please enter authorized user Email");
    }
    const isMatch = await bcrypt.compare(pwd, user1.pwd);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return user1;
    };

 const user = mongoose.model("user", userSchema);
 module.exports = user; 