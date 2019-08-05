const express = require("express");
const Customer = require('../schemas/Customer');
const machanics = require('../schemas/Machanics');
const admin = require('../schemas/AdminSignup');
const router = express.Router();

//here the signin request hendeld the Coustomer
router.post("/customerlogin", (req, res) => {
    let { Email, PassWord } = req.body;
  
    // console.log(typeof(Email),PassWord);
  
    //   let a = Email;
    // Email = toString(a);
    // console.log(Email);
    Customer.find({ $and: [{ UserName: Email }, { Password: PassWord }] }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });//here the customer signin data featching request end
  
  //here the signin request hendeld for the machanic
  router.post("/Machaniclogin", (req, res) => {
    let { Email, PassWord } = req.body;
  
    // console.log(typeof(Email),PassWord);
  
    //   let a = Email;
    // Email = toString(a);
    // console.log(Email);
    machanics.find({ $and: [{ UserName: Email }, { Password: PassWord }] }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });//here the signin data featching request end
  
  router.post("/adminlogin", (req, res) => {
    let { Email, PassWord } = req.body;
  
    // console.log(typeof(Email),PassWord);
  
    //   let a = Email;
    // Email = toString(a);
    // console.log(Email);
    admin.find({ $and: [{ UserName: Email }, { Password: PassWord }] }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });//here the signin data featching request end
  module.exports = router