const express = require("express");
const Customer = require('../schemas/Customer');
const machanics = require('../schemas/Machanics');
const admin = require('../schemas/AdminSignup');
const orderBooking = require('../schemas/orderBooking');
const AdminOrders = require('../schemas/AdminOrder')
const router = express.Router();
const MechanicOrder = require('../schemas/MechanicOrder');

const client = require('twilio')(
  'AC398a682ac9325619ecc3594816282a24',
  'd8a32fa8b682522fb1cdd69c7234d8c9'
);

//get Admin record for Admin Profile
router.post("/getAdmin", (req, res) => {
  let { Id } = req.body;
  // console.log(Id);
  admin.find({ _id: Id }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//update Admin Record
router.post("/update-Admin", (req, res) => {
  // let data = new admin();
  const { Name, Email, UserName, Password, Phone, Address } = req.body;
  admin.update({ 'UserName': UserName }, { '$set': { 'Password': Password, 'Phone': Phone, 'Name': Name, 'Email': Email, 'Address': Address } }, { multi: true },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
})
//<--------------------------------------------------------------------------------------------------------------------------->
// update Machanics by Admin 
router.post("/update-Machanicby-Admin", (req, res) => {
  const { NewUserName, Name, Email, UserName, Password, Phone, Address } = req.body;
  machanics.update({ 'UserName': UserName }, { '$set': { 'UserName': NewUserName, 'Password': Password, 'Phone': Phone, 'Name': Name, 'Email': Email, 'Address': Address } }, { multi: true },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
})

//get mechanics by category for admin
router.post("/get-machanic-by-category", (req, res) => {
  let { category, service, active } = req.body;
  console.log(active);
  machanics.find({ $and: [{ Category: category }, { sevices: service }, { Active: active }] }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//search machanic by Services
router.post('/search-mechanics-by-category', (req, res) => {
  let { category } = req.body;
  // console.log(service);
  machanics.find({Category: category}).
    sort({ id: -1 }).
    exec(function (err, machanics) {
      if (err) return res.json(err)
      res.send(machanics);
    });
});

router.post('/search-mechanics-detail', (req, res) => {
  let { userName } = req.body; /* req.query.username */
  // console.log(userName);
  machanics.find({
    UserName: userName
  }).
    sort({ id: -1 }).
    exec(function (err, machanics) {
      if (err) return res.json(err)
      return res.json({ success: true, data: machanics });
    });
});

//get mechanics Record by Name get-machanic-by-Name

router.post("/get-machanic-by-Name", (req, res) => {
  let { Name } = req.body;
  // console.log(Name);
  machanics.find({ Name: Name }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//delete Mechanic 
router.post("/delete-Mechanic", (req, res) => {
  let { UserName } = req.body;
  // console.log(UserName);
  machanics.remove({ UserName: UserName }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//<--------------------------------------------------------------------------------------------------------------------------->
//Assign Mechanic Against the order 
router.post("/assign-Machanic-by-Admin", (req, res) => {
  const { Id, Status, Phone,CServices } = req.body;
  // console.log(Id+'mname '+Name+' muser '+ UserName+' '+Phone,"Cphone"+Cphone+"Cname"+CName)
  orderBooking.update({ '_id': Id }, { '$set': { 'Status': Status } }, { multi: true },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  client.messages
    .create({
      from: '+12056273399',
      to: "+92" + Phone,
      body: "We are post a task on your Profile for Service:" + CServices + " Check And Confirm It"
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
})
//update machanics
router.post("/update-machanic", (req, res) => {
  let { Id } = req.body;
  // console.log(Id);
  machanics.find({ UserName: Id }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//search order by admin with user name 
router.route('/search-orders-by-admin').post(function (req, res) {
  let { Username } = req.body;

  orderBooking.find({ UserName: Username }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
});
//get all machanics
router.route('/getAll-Mechanics').get(function (req, res) {
  machanics.find(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});
//<--------------------------------------------------------------------------------------------------------------------------->
//get All coustomer records for admin Coustomer Report Tab
router.route('/customer-report').post(function (req, res) {
  Customer.find({}).
    sort({ id: -1 }).
    exec(function (err, customerReport) {
      if (err) return res.send(err)
      res.send(customerReport)
    });
});
//get all data from coustomer 
router.route('/customer-detail').get(function (req, res) {
  Customer.find({}).
    sort({ id: -1 }).
    exec(function (err, customer) {
      if (err) return res.send(err)
      res.send(customer)
    });
});
//search coustomer by
router.post('/search-customer', (req, res) => {
  let { customerName } = req.body; /* req.query.username */
  Customer.find({
    Name: customerName
  }).
    sort({ id: -1 }).
    exec(function (err, Customer) {
      if (err) return res.send(err)
      res.send(Customer)
    });
});
//delete Customer
router.post("/delete-Customer", (req, res) => {
  let { id } = req.body;
  // console.log(id);
  Customer.remove({ _id: id }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//<--------------------------------------------------------------------------------------------------------------------------->
//delete order by Admin 
router.post("/delete-order", (req, res) => {
  let { UserName, service } = req.body;
  // console.log(UserName,service);
  orderBooking.remove({ $and: [{ UserName: UserName }, { service: service }] }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
//post order of selected Mechanics Profile 
//post_task-to-mechanics
router.post('/post-task-to-mechanics', (req, res) => {
  let {id,UserName, fullName, phone, address, category, service, DateAndTime, Status, Mechanic, MechanicUserName, Confirm} = req.body;
  //  console.log(id,UserName, fullName, phone, address, category, service, DateAndTime, Status, Mechanic, MechanicUserName, Confirm );
  let newOrder = new MechanicOrder();
  newOrder._id= id,
  newOrder.UserName = UserName,
    newOrder.fullName = fullName,
    newOrder.phone = phone,
    newOrder.address = address,
    newOrder.category = category,
    newOrder.service = service,
    newOrder.DateAndTime = DateAndTime,
    newOrder.Status = Status,
    newOrder.Mechanic = Mechanic,
    newOrder.MechanicUserName = MechanicUserName,
    newOrder.Confirm = Confirm
  newOrder.save((err,data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  })
  })

  //<--------------------------------------------------------------------------------------------------------------------------->
  router.post("/get-machanic-by-Active", (req, res) => {
    let { category, Active } = req.body;
    // console.log(category);
    machanics.find({ $and: [{ Category: category }, { Active: Active }] }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  //completed-orders
  router.post("/completed-orders", (req, res) => {
    orderBooking.find({ Confirm:'Complete' }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.send(data)
    });
  });
  // get All -completed-orders
  router.post("/get-completed-orders", (req, res) => {
    AdminOrders.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.send(data)
    });
  });
  //delete-completed-order
  router.post("/delete-completed-order", (req, res) => {
    let { id } = req.body;
    // console.log(UserName, service);
    AdminOrders.remove({_id:id}, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  //get all confirm orders
  router.route('/orders').get(function (req, res) {
    orderBooking.find({Confirm:'true'}).
      sort({ id: -1 }).
      exec(function (err, orders) {
        if (err) return res.send(err)
        res.send(orders)
      });
  });
  //Delete Customer Signup
  ///delete-customer
  router.post("/delete-customer", (req, res) => {
    let { id } = req.body;
    // console.log(UserName, service);
    Customer.remove({_id:id}, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  //delete mechanic record 
  //delete-mechanic
  router.post("/delete-mechanic-by-id", (req, res) => {
    let { id } = req.body;
    console.log(id);
    machanics.findByIdAndDelete({_id:id}, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  //briefSummary
  router.post("/briefSummary", (req, res) => {
    let summary = [];
    AdminOrders.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      summary[0]=data.length;
      orderBooking.find({Confirm:'true'}).
      sort({ id: -1 }).
      exec(function (err, orders) {
        if (err) return res.send(err)
        summary[1]=orders.length;
        machanics.find((err, user)=> {
          if (err)return res.json({ success: false, error: err });
          summary[2]=user.length;
          return res.send(summary);
        });//find all mechanics
      });//find all booked task 
    });//find all complete task 
  })//post method end

  //mechanics Summary fp\o reports
    router.post("/mechanicsSummary", (req, res) => {
      let mechanisummary = [];
      machanics.find({Category: "Electrician"}).
      sort({ id: -1 }).
      exec(function (err, Electrician) {
        if (err) return res.json(err)
        mechanisummary[0]= Electrician.length;
        machanics.find({Category: "Home Cleaning"}).
        sort({ id: -1 }).
        exec(function (err, Home_Cleaning) {
          if (err) return res.json(err)
          mechanisummary[1]=  Home_Cleaning.length;
          machanics.find({Category: "Plumber"}).
          sort({ id: -1 }).
          exec(function (err, Plumber) {
            if (err) return res.json(err)
            mechanisummary[2]= Plumber.length;
            machanics.find({Category: "Carpenter"}).
            sort({ id: -1 }).
            exec(function (err, Car_Painter) {
              if (err) return res.json(err)
              mechanisummary[3]= Car_Painter.length;
              machanics.find({Category: "Painter"}).
              sort({ id: -1 }).
              exec(function (err, Painter) {
                if (err) return res.json(err)
                mechanisummary[4]= Painter.length;
                machanics.find({Category: "Mazdoor"}).
                sort({ id: -1 }).
                exec(function (err, Mazdoor) {
                  if (err) return res.json(err)
                  mechanisummary[5]= Mazdoor.length;
                  machanics.find({Category: "HVAC, A/C Service & Gas Refilling"}).
                  sort({ id: -1 }).
                  exec(function (err, HVAC) {
                    if (err) return res.json(err)
                    mechanisummary[6]= HVAC.length;
                    return res.send(mechanisummary);
                    
                });//find mechanic by HVAC, A/C Service & Gas Refilling
                
              });//find mechanic by Mazdoor
              
            });//find mechanic by Painter
            
          });//find mechanic by Carpenter
          
        });//find mechanic by Plumber
        
      });//find mechanic by Home Cleaning

    });//find mechanic by Electricion
    
  })//post method end
  
  //Booked order Summary
  router.post("/bookorderSummary", (req, res) => {
    let bookordersummary = [];
    orderBooking.find({category: "Electrician"}).
    sort({ id: -1 }).
    exec(function (err, Electrician) {
      if (err) return res.json(err)
      bookordersummary[0]= Electrician.length;
      orderBooking.find({category: "Home Cleaning"}).
      sort({ id: -1 }).
      exec(function (err, Home_Cleaning) {
        if (err) return res.json(err)
        bookordersummary[1]=  Home_Cleaning.length;
        orderBooking.find({category: "Plumber"}).
        sort({ id: -1 }).
        exec(function (err, Plumber) {
          if (err) return res.json(err)
          bookordersummary[2]= Plumber.length;
          orderBooking.find({category: "Carpenter"}).
          sort({ id: -1 }).
          exec(function (err, Car_Painter) {
            if (err) return res.json(err)
            bookordersummary[3]= Car_Painter.length;
            orderBooking.find({category: "Painter"}).
            sort({ id: -1 }).
            exec(function (err, Painter) {
              if (err) return res.json(err)
              bookordersummary[4]= Painter.length;
              orderBooking.find({category: "Mazdoor"}).
              sort({ id: -1 }).
              exec(function (err, Mazdoor) {
                if (err) return res.json(err)
                bookordersummary[5]= Mazdoor.length;
                orderBooking.find({category: "HVAC, A/C Service & Gas Refilling"}).
                sort({ id: -1 }).
                exec(function (err, HVAC) {
                  if (err) return res.json(err)
                  bookordersummary[6]= HVAC.length;
                  return res.send(bookordersummary);
                  
                });//find mechanic by HVAC, A/C Service & Gas Refilling
                
              });//find mechanic by Mazdoor
              
            });//find mechanic by Painter
            
          });//find mechanic by Carpenter
          
        });//find mechanic by Plumber
        
      });//find mechanic by Home Cleaning

    });//find mechanic by Electricion
    
  })//post method end

  // complete order Summary 

  router.post("/completeorderSummary", (req, res) => {
    let comordersummary = [];
    AdminOrders.find({category: "Electrician"}).
    sort({ id: -1 }).
    exec(function (err, Electrician) {
      if (err) return res.json(err)
      comordersummary[0]= Electrician.length;
      AdminOrders.find({category: "Home Cleaning"}).
      sort({ id: -1 }).
      exec(function (err, Home_Cleaning) {
        if (err) return res.json(err)
        comordersummary[1]=  Home_Cleaning.length;
        AdminOrders.find({category: "Plumber"}).
        sort({ id: -1 }).
        exec(function (err, Plumber) {
          if (err) return res.json(err)
          comordersummary[2]= Plumber.length;
          AdminOrders.find({category: "Carpenter"}).
          sort({ id: -1 }).
          exec(function (err, Car_Painter) {
            if (err) return res.json(err)
            comordersummary[3]= Car_Painter.length;
            AdminOrders.find({category: "Painter"}).
            sort({ id: -1 }).
            exec(function (err, Painter) {
              if (err) return res.json(err)
              comordersummary[4]= Painter.length;
              AdminOrders.find({category: "Mazdoor"}).
              sort({ id: -1 }).
              exec(function (err, Mazdoor) {
                if (err) return res.json(err)
                comordersummary[5]= Mazdoor.length;
                AdminOrders.find({category: "HVAC, A/C Service & Gas Refilling"}).
                sort({ id: -1 }).
                exec(function (err, HVAC) {
                  if (err) return res.json(err)
                  comordersummary[6]= HVAC.length;
                  return res.send(comordersummary);
                  
                });//find mechanic by HVAC, A/C Service & Gas Refilling
                
              });//find mechanic by Mazdoor
              
            });//find mechanic by Painter
            
          });//find mechanic by Carpenter
          
        });//find mechanic by Plumber
        
      });//find mechanic by Home Cleaning

    });//find mechanic by Electricion
    
  })//post method end

  module.exports = router
  //