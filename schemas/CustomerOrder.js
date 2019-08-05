const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let completedOrder = new Schema({
UserName:{
        type:String
    },
fullName:{
    type:String
},
phone:{
    type:Number
},
address:{
    type:String
},
category:{
    type:String
},
service:{
    type:String
},
time:{
    type:String
},
DateAndTime:{
    type:String
},
Status:{
    type:String
},
Mechanic:{
    type:String
},
MechanicUserName:{
    type:String
},
Confirm:{
    type: String
}
},
{
timestamps:true
})
module.exports = mongoose.model('customerCompletedOrder', completedOrder);