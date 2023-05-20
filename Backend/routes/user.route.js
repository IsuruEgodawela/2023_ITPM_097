const express = require("express");
const router = require("express").Router();
let user = require("../models/user");
const validator= require("validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const userauth = require("../middleware/userauth");

//user signup
router.post("/signup",async (req, res) => {
    try {
      const {
        userName,
        email,
        pwd,
      } = req.body;

      let user1 = await user.findOne({ email });
      if (user1) {
        throw new Error("User already exists");
      }

      user1 = {
        userName : userName,
        email: email,
        pwd: pwd,
      };
    
      const newuser = new user(user1);
      await newuser.save();
      const token = await newuser.generateAuthToken()
      res.status(201).send({ status: "User Member Created", user: newuser, token: token });
     
      console.log(user1);
    
      } catch (error) {
         console.log(error.message);
         res.status(500).send({error: error.message});
        //  console.log(error)
    }
  });


   //user login
   router.post('/signin', async (req, res) => {
    try {
      const {email, pwd} = req.body
      const Users = await user.findByCredentials(email, pwd)
      const token = await Users.generateAuthToken()
      res.status(200).send({token: token, Users: Users})
  
    } catch (error) {
      res.status(500).send({ error: error.message });
      console.log(error);
    }
  });


  
  module.exports = router;