const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let service = new Schema({
    serviceId: {
        type:String,
        unique:true
    },
    serviceName:String,
    serviceCategory:String,
    servicePrice:String,
    
},
{
    timestamps:true
}
);
module.exports = mongoose.model('Services', service);