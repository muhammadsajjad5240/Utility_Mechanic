const magoose= require("mongoose");
const Schema= magoose.Schema;

const Confirmation= new Schema({  
  Code: Number,
  Username: String,
  createdAt: { type: Date, default: Date.now },
  expireAt: { type: Date, }

});
Confirmation.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
module.exports=magoose.model("restpassword",Confirmation);