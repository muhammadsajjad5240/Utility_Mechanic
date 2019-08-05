const express = require("express");
const Customer = require('../schemas/Customer');
const machanics = require('../schemas/Machanics');
const admin = require('../schemas/AdminSignup');
const router = express.Router();

//signup request of costomer to put data into data base
router.post("/signUp", (req, res) => {
  let data = new Customer();
  const { Name, Email, UserName, Password, Phone, Address } = req.body;
  console.log(Password, Phone)
  data.Name = Name;
  data.Email = Email;
  data.UserName = UserName;
  data.Password = Password;
  data.Phone = Phone;
  data.Address = Address;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});//here the signup data uploded request end

//Machanics signup request to put data into data base
router.post("/Machanics", (req, res) => {
  let data = new machanics();
  const { Name, Email, UserName, Password, Phone, Address, status, Category, sevices } = req.body;
  machanics.find({ UserName: UserName}, (err, record) => {
    if (err) return res.json({ success: false, error: err });
    if (record.length === 0) {
      console.log(Password, Phone)
      data.Name = Name;
      data.Email = Email;
      data.UserName = UserName;
      data.Password = Password;
      data.Phone = Phone;
      data.Address = Address;
      data.status = status;
      data.Category = Category,
      data.sevices = sevices;
      data.Active = true;
      data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
      });
    }
    else {
      return res.send({ success: 1 })
    }
  });

});//here the machanic signup data uploded request end

//Admin signup request to put data into data base
router.post("/AdminSignup", (req, res) => {
  let data = new admin();
  const { Name, Email, UserName, Password, Phone, Address } = req.body;
  console.log(Password, Phone)
  data.Name = Name;
  data.Email = Email;
  data.UserName = UserName;
  data.Password = Password;
  data.Phone = Phone;
  data.Address = Address;
  // data.status=status;
  // data.sevices=sevices;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});//here the machanic signup data uploded request end

//<------------------------------------------------------------------------------------------------------------------------------------>

//All The requests that come from signup page for checking the user name is unique or not hendle here 
//here the signup coustomer name checking request hendeld here
router.post("/customerusernameCheck", (req, res) => {
  let { Email } = req.body;

  // console.log(typeof(Email),PassWord);

  //   let a = Email;
  // Email = toString(a);
  console.log(Email);
  Customer.find({ UserName: Email }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});//here the customer signin data featching request end
router.post("/mechanicusernameCheck", (req, res) => {
  let { Email } = req.body;

  // console.log(typeof(Email),PassWord);

  //   let a = Email;
  // Email = toString(a);
  console.log(Email);
  machanics.find({ UserName: Email }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});//here the mechanic signin data featching request end
router.post("/adminusernameCheck", (req, res) => {
  let { Email } = req.body;

  // console.log(typeof(Email),PassWord);

  //   let a = Email;
  // Email = toString(a);
  console.log(Email);
  admin.find({ UserName: Email }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});//here the mechanic signin data featching request end
module.exports = router;