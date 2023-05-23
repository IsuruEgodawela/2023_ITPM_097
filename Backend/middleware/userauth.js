const jwt = require("jsonwebtoken");
const user = require("../models/user");

const auth = async (req, res, next) => {
    try {
      const token = req.header("Authorization");
      const decode = jwt.verify(token, "jwtSecret");
      const Users = await user.findOne({ _id: decode._id, "tokens.token": token });
      if (!Users) {
        throw new Error("Please Authenticated");
      }
  
      req.token = token;
      req.Users = Users;
      next();
      
    } catch (error) {
      res.status(401).send({ message: error.message });
      console.log("Error in auth.js middleware ", error.message);
    }
  };
  
  module.exports = auth;
  