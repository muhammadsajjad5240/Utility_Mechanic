const magoose= require("mongoose");
const Schema= magoose.Schema;

const image = new Schema(
    {
        img:{ data: Buffer, contentType: String}
    }
);
module.exports=magoose.model('profiel',image);