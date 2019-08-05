const magoose= require("mongoose");
const Schema= magoose.Schema;

const Machanics= new Schema(
{
    Name: String,
    Email: String,
    UserName: String,
    Password: String,
    Phone: String,
    Address: String,
    status: String,
    Category : String,
    sevices: String,
    Active: Boolean,
},
{
timestamps:true
}
);
module.exports=magoose.model("Machanics",Machanics);