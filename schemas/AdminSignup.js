const magoose= require("mongoose");
const Schema= magoose.Schema;

const AdminSignup= new Schema(
{
    Name: String,
    Email: String,
    UserName: String,
    Password: String,
    Phone: String,
    Address: String
},
{
timestamps:true
}
);
module.exports=magoose.model("Admin",AdminSignup);