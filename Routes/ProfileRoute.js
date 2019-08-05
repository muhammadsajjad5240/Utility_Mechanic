const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const profile = require('../schemas/Profiles')
const fs = require('fs');
let mypath;


const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './public/files') },
    filename: (req, file, cd) => {
      mypath = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      cd(null, mypath)
      console.log(mypath);
    }
  });
  const upload = multer(
    {
      storage: storage,
      limits: { fileSize: 1024000 }
    });
router.post('/upload', upload.single('myimage'), (req, res, err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });//here the image upload request end

  router.post("/profile-image", (req, res) => {
    const { data } = req.body;
    // console.log('Hi!')
    // console.log(data);
    const new_Img = new profile();
    new_Img._id = data
    //"5d1c8ecb8c46a301a887adc9"
    new_Img.img.data = fs.readFileSync('./public/files/' + mypath);
    new_Img.img.contentType = 'image/png';
    new_Img.save((err, a) => {
      if (err) {
        return res.json({ success: false, error: err });
  
      }
      return res.json({ success: true });
      // })
    });
  })
//delete coustomer record exprimet
router.post("/delete-Profile", (req, res) => {
    let { Id } = req.body;
    profile.remove({ _id: Id }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });//here the customer signin data featching request end
//profile imgage update 

  
// get profile image for Customers, Mechanics, And Admin
router.post("/imgget", (req, res) => {
    let { Id } = req.body;
    profile.find({ _id: Id }, (err, img) => {
      if (err)
        res.send(err);
      res.contentType('json');
      res.send(img);
    }).sort({ createdAt: 'desc' });
  });
  module.exports = router