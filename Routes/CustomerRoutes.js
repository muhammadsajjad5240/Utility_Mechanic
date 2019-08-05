const express = require("express");
const Customer = require('../schemas/Customer');
const Customerorder = require('../schemas/CustomerOrder')
const Mechanicorder = require('../schemas/MechanicOrder');
const orderBooking = require('../schemas/orderBooking');
const Adminorder = require('../schemas/AdminOrder');
const router = express.Router();
const confirmation = require('../schemas/confimations');
const rset =require("../schemas/resetpassword")
const moment = require('moment');
const client = require('twilio')(
  'AC398a682ac9325619ecc3594816282a24',
  'd8a32fa8b682522fb1cdd69c7234d8c9'
);

// update customer record
router.post("/update-coustomer", (req, res) => {
  // let data = new Customer();
  const { Name, Email, UserName, Password, Phone, Address } = req.body;
  Customer.update({ 'UserName': UserName }, { '$set': { 'Password': Password, 'Phone': Phone, 'Name': Name, 'Email': Email, 'Address': Address } }, { multi: true },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
})

//this the route where to get the Customer record and display on the customer home page
router.post("/getcustomer", (req, res) => {
  let { Id } = req.body;
  // console.log(Id);
  //   let a = Email;
  // Email = toString(a);
  // console.log(Email);
  Customer.find({ _id: Id }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//get customer all orders for customer order page
router.route('/get-coustomer-orders').post(function (req, res) {
  let { Username } = req.body;

  orderBooking.find({ UserName: Username }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
});
//get- all complete orders of customer
router.route('/get-complete-orders').post(function (req, res) {
  let { Username } = req.body;

  Customerorder.find({ UserName: Username }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
});
//order booking Route for coustomer 
router.route('/order-booking').post(function (req, res) {

  let {
    UserName,
    fullName,
    phone,
    address,
    category,
    service,
    DateAndTime,
    Code

  } = req.body;

  let Data = new confirmation();
  orderBooking.find({ $and: [{ UserName: UserName }, { service: service }] }, (err, data) => {
    // console.log(data);
    if (err) return res.json({ success: false, error: err });
    if (data.length === 0) {
      let newOrder = new orderBooking();
      newOrder.UserName = UserName,
        newOrder.fullName = fullName,
        newOrder.phone = phone,
        newOrder.address = address,
        newOrder.category = category,
        newOrder.service = service,
        newOrder.DateAndTime = DateAndTime,
        newOrder.Status = 'Waiting...',
        newOrder.Mechanic = 'Not Assign',
        newOrder.MechanicUserName = 'Undefine',
        newOrder.Confirm = 'false',
        newOrder.save(err => {
          if (err) return res.json({ success: false, error: err });
        })

      Data.Code = Code;
      Data.Username = UserName;
      Data.service = service;
      Data.expireAt = moment().add(60, 'seconds');
      Data.save(err => {
        if (err) return res.json({ success: false, error: err });
      })
      client.messages
        .create({
          from: '+12056273399',
          to: "+92" + phone,
          body: "Your Order varification code is: " + Code
        })
        .then(() => {
          res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
          console.log(err);
          res.send(JSON.stringify({ success: false},'Code error'));
        });
    }
    else {
      return res.status(406).send({ error: "already booked" })
    }
  })
});
//delete order 
router.post("/delete-order", (req, res) => {
  let { UserName, service } = req.body;
  // console.log(UserName, service);
  orderBooking.remove({ $and: [{ UserName: UserName }, { service: service }] }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//delete-completed-order
router.post("/delete-completed-order", (req, res) => {
  let { UserName, service } = req.body;
  // console.log(UserName, service);
  Customerorder.remove({ $and: [{ UserName: UserName }, { service: service }] }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//resend code to customer 
router.post("/send-code", (req, res) => {
  let { UserName, service, phone, Code } = req.body;

  // console.log(UserName, service, phone, Code)
  let Data = new confirmation();
  Data.Code = Code;
  Data.Username = UserName;
  Data.service = service;
  Data.expireAt = moment().add(60, 'seconds');
  Data.save(err => {
    if (err) return res.json({ success: false, error: err });
    client.messages
      .create({
        from: '+12056273399',
        to: "+92" + phone,
        body: "Your New Order varification code is: " + Code
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  })
})
router.post('/confirm-code', (req, res) => {
  let { Code } = req.body;

  // console.log(Code)
  confirmation.find({ Code: Code }).
  sort({ id: -1 }).
  exec(function (err, orders) {
    if (err) return res.send(err)
    res.send(orders)
  })
})
router.post('/order-confirm', (req, res) => {
  let {UserName,service} = req.body;
  orderBooking.update({ $and: [{ UserName: UserName }, { service: service }] }, { '$set': { 'Confirm': 'true' } }, { multi: true },
      (err,update) => {
        if (err) return res.json({ success: false, error: err });
        return res.send(update);
      });

    })
//order-complete
router.post('/order-complete', (req, res) => {
  let {UserName,service} = req.body;
  orderBooking.find({ $and: [{ UserName: UserName }, { service: service }] }, (err, data) => {
    console.log(data[0]);
    if (err) return res.json({ success: false, error: err });
  let corder = new Customerorder();
  corder._id = data[0]._id,
  corder.UserName = data[0].UserName,
  corder.fullName = data[0].fullName,
  corder.phone = data[0].phone,
  corder.address = data[0].address,
  corder.category = data[0].category,
  corder.service = data[0].service,
  corder.DateAndTime = data[0].DateAndTime,
  corder.Status = 'Done',
  corder.Mechanic = data[0].Mechanic,
  corder.MechanicUserName = data[0].MechanicUserName,
  corder.Confirm = 'Complete',
  corder.save((err,data1) => {
    if (err) return res.json({ success: false, error: err });
  })//coustomer complete record save
  Mechanicorder.update({_id:data[0]._id }, { '$set': { 'Confirm': true } }, { multi: true },
      (err) => {
        if (err) return res.json({ success: false, error: err });
      })//Mechanic complete record save

  corder = new Adminorder();
  corder._id = data[0]._id,
  corder.UserName = data[0].UserName,
  corder.fullName = data[0].fullName,
  corder.phone = data[0].phone,
  corder.address = data[0].address,
  corder.category = data[0].category,
  corder.service = data[0].service,
  corder.DateAndTime = data[0].DateAndTime,
  corder.Status = 'Complete',
  corder.Mechanic = data[0].Mechanic,
  corder.MechanicUserName = data[0].MechanicUserName,
  corder.save((err) => {
    if (err) return res.json({ success: false, error: err });
  })//Admin complete record save
  orderBooking.remove({_id:data[0]._id}, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
       
});//find record end
})

router.post("/rest-code", (req,res)=>{
  let{Code,UserName,phone} = req.body;
  let myrest = new rset();

  myrest.Code = Code;
  myrest.Username = UserName;
  myrest.expireAt = moment().add(60, 'seconds');
  myrest.save(err => {
    if (err) return res.json({ success: false, error: err });
  })
  client.messages
    .create({
      from: '+12056273399',
      to: "+92" + phone,
      body: "Your Password Reset code is: "+ Code
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false},'Code error'));
    });
})
router.post('/confirm-rest-code', (req, res) => {
  let { Code } = req.body;
  rset.find({ Code: Code }).
  sort({ id: -1 }).
  exec(function (err, orders) {
    if (err) return res.send(err)
    res.send(orders)
  })
})
router.post('/rest-password', (req, res) => {
  let {UserName,password} = req.body;
  Customer.update({UserName: UserName }, { '$set': { 'Password': password } }, { multi: true },
      (err,update) => {
        if (err) return res.json({ success: false, error: err });
        return res.send(update);
      });

    })
module.exports = router;