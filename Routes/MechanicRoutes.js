const Mechanicorder = require('../schemas/MechanicOrder')
const express = require("express");
const router = express.Router();
const machanics = require('../schemas/Machanics')
const orderBooking = require('../schemas/orderBooking');
const client = require('twilio')(
  'AC398a682ac9325619ecc3594816282a24',
  'd8a32fa8b682522fb1cdd69c7234d8c9'
);

//
router.post("/Accept-order", (req, res) => {
  let {id,Mechanicid,CoustomePhone,Cusername,Cname,Cservice,Caddress,Ccategory} = req.body;
  // console.log(UserName,service);
    machanics.find({_id:Mechanicid }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    else{
      console.log(data[0].Name);
    orderBooking.update({ _id: id}, { '$set': { Mechanic : data[0].Name,MechanicUserName : data[0].UserName } }, { multi: true },
    err => {
    if (err) return res.json({ success: false, error: err });
    });
  Mechanicorder.update({ _id: id}, { '$set': {  Status : 'In Process', } }, { multi: true }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    });
    machanics.update({ _id: Mechanicid}, { '$set': { Active :false} }, { multi: true },
    err => {
    if (err) return res.json({ success: false, error: err });
    });
    client.messages
    .create({
      from: '+12056273399',
      to: "+92"+ CoustomePhone,
      body: Cname + "your order Booked for a Mechanic of " + Ccategory + " for Service" + Cservice + " Against\nUserName:" + Cusername +
      "\nMechanic: " + data[0].Name + "\nContect: " + data[0].Phone + "\nFor More Information Contect with Mechanic" +
      "\n\nFor Complains Contect Our Customer Service Numner"
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  }//else end
   });//fine end
});//axios end

router.post("/Reject-order", (req, res) => {
  let {id} = req.body;
  // console.log(UserName,service);
  orderBooking.update({ _id: id }, { '$set': { Status : 'Waiting...' } }, { multi: true },
    err => {
      if (err) return res.json({ success: false, error: err });
    });
  Mechanicorder.remove({_id:id}, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
// router.route('/mechanic-orders').post(function (req, res) {
//   let { UserName } = req.body;
// //  console.log(UserName);
//   Mechanicorder.find({ MechanicUserName: UserName }).
//     sort({ id: -1 }).
//     exec(function (err, orders) {
//       if (err) return res.send(err)
//       res.send(orders)
//     });
// });
//order complete bty mechanic
router.route('/complete-order').post(function (req, res) {
    let {id,Mid} = req.body;
   console.log(id,Mid);
   orderBooking.update({ _id: id }, { '$set': { Status : 'Done' } }, { multi: true },
    err => {
      if (err) return res.json({ success: false, error: err });
    });
    Mechanicorder.update({ _id: id}, { '$set': {  Status : 'Done'} }, { multi: true }, (err) => {
      if (err) return res.json({ success: false, error: err });
      });
    machanics.update({ _id: Mid}, { '$set': { Active :true} }, { multi: true },
    err => {
    if (err) return res.json({ success: false, error: err });
    return res.send({ success: true})
    });
  });
  //get-machanic-orders
  router.post("/get-machanic-orders", (req, res) => {
    let { Id } = req.body;
    machanics.find({ _id: Id }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      Mechanicorder.find({ $and: [{ MechanicUserName: data[0].UserName },{ Confirm: false }] }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
    });//find funcation end
  });//post methond end
  //get-complete-order
  router.post("/get-complete-order", (req, res) => {
    let { Id } = req.body;
    machanics.find({ _id: Id }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      Mechanicorder.find({ $and: [{ MechanicUserName: data[0].UserName },{ Confirm: true }] }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
    });//find funcation end
  });//post methond end
  //delete completed task
  router.post("/delete-completed-order", (req, res) => {
    let { id } = req.body;
    // console.log(UserName, service);
    Mechanicorder.remove({_id:id}, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  //get mechanic profile
  router.post("/getmachanic", (req, res) => {
    let { Id } = req.body;
    machanics.find({ _id: Id }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

  module.exports = router;