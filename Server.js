const services = require('./schemas/servicePriceModel');
const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const logger = require("morgan");
const new1 = require("./schemas/data");
const saveFeedBack = require('./schemas/feedBackSchema');
const Customer = require('./schemas/Customer');
const machanics = require('./schemas/Machanics');
const admin = require('./schemas/AdminSignup');
const ProfileRoute = require('./Routes/ProfileRoute');
const orderBooking = require('./schemas/orderBooking');
const AdminRoute = require('./Routes/AdminRoutes');
const SigninRoute = require('./Routes/Signin');
const SignUpRoute = require("./Routes/Signups");
const CoustomerRoute = require('./Routes/CustomerRoutes');
const Mechanic= require('./Routes/MechanicRoutes');

const client = require('twilio')(
  'AC398a682ac9325619ecc3594816282a24',
  'd8a32fa8b682522fb1cdd69c7234d8c9'
);
const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
const router = express.Router();

//where to store uploaded photos


//<-------------------------------------------------------------------------------------------------------------------->
// this is our MongoDB database
// const dbRoute = "mongodb+srv://bilal555:12345@cluster0-xuzxi.mongodb.net/test?retryWrites=true&w=majority";
const dbRoute = "mongodb+srv://bilal555:12345@utility-mechanics-xuzxi.azure.mongodb.net/test?retryWrites=true&w=majority";
//  const dbRoute = "mongodb://127.0.0.1:27017/mydb";
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
// app.use(express.static(path.join(__dirname, './frontend/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
//file upload method
//<-------------------------------------------------------------------------------------------------------------------->

//search machanic by Services
router.post('/search-mechanics-byName', (req, res) => {
  let { service } = req.body;
  // console.log(service);
  machanics.find({
    sevices: service
  }).
    sort({ id: -1 }).
    exec(function (err, machanics) {
      if (err) return res.json(err)
      return res.json({ success: true, data: machanics });
    });
});
//get all order 



// add service
router.route('/add-new-service').post(function (req, res) {
  let addService = new services(req.body);
  addService.save()
    .then(newService => {
      res.status(200).json({ 'newService': 'services add successfully' });
    })
    .catch(err => {
      res.status(400).json('newService Register Failed');
    });
  console.log(addService);
});
//search service
router.post('/search-service', (req, res) => {
  let { serviceName } = req.body; /* req.query.username */

  services.find({
    serviceName: serviceName
  }).
    sort({ id: -1 }).
    exec(function (err, services) {
      if (err) return res.json(err)
      return res.json({ success: true, data: services });
      console.log(services);
    });
});

//<-------------------------------------------------------------------------------------------------------------------->
//});


//<-------------------------------------------------------------------------------------------------------------------->
//Never used now
// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  let { update } = new Customer(req.body);
  new1.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  new1.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});
//<-------------------------------------------------------------------------------------------------------------------->
router.route('/mechanics-detail').get(function (req, res) {
  machanics.find({}).
    sort({ id: -1 }).
    exec(function (err, services) {
      if (err) return res.send(err)
      res.send(services)
    });
});




//<-------------------------------------------------------------------------------------------------------------------->
//All The requests that come from feedBack page Hendel here Below
//here the feed back data send into data base request handle
router.post("/putfeedBack", (req, res) => {
  let data = new saveFeedBack();

  const { id, Name, Email, phone, feedBack } = req.body;

  if ((!id && id !== 0) || !Email) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.id = id;
  data.Name = Name;
  data.Email = Email;
  data.phone = phone;
  data.feedBack = feedBack;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});//feedBack save into database request end
//<-------------------------------------------------------------------------------------------------------------------->//orders reques here
//order Booking request 

//here the signin data featching request end


// order fecthing request 
router.post("/fetch-order", (req, res) => {
  let { userName, Service } = req.body;
// console.log(userName, Service);
  orderBooking.find({ $and: [{ UserName: userName }, { service: Service }] }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});//here the signin data featching request end

router.route('/orders-by-id').post(function (req, res) {
  let { id } = req.body;

  orderBooking.find({ _id: id }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
});
//search order by UserName

//search orders by Mechanics Name
router.route('/mechanic-orders').post(function (req, res) {
  let { UserName } = req.body;
//  console.log(UserName);
  orderBooking.find({ MechanicUserName: UserName }).
    sort({ id: -1 }).
    exec(function (err, orders) {
      if (err) return res.send(err)
      res.send(orders)
    });
});
//<-------------------------------------------------------------------------------------------------------------------->

//<-------------------------------------------------------------------------------------------------------------------->
//MyRoutes
app.use('/Signin',SigninRoute);
app.use('/Signups',SignUpRoute);
app.use('/Customer',CoustomerRoute);
app.use('/Profile',ProfileRoute);
app.use('/Admin',AdminRoute);
app.use('/Mechanic',Mechanic);
//<-------------------------------------------------------------------------------------------------------------------->
// append /api for our http requests
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname+'./frontend/build/index.html'));
// });
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, './frontend/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
  });
}
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));