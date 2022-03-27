const mongoose = require("mongoose");
const winningSchema=mongoose.Schema(
    {
       winning_user_id:{type:String,require:true},
       winning_item_id:{type:String,require:true},
       winnig_date:{type:Date,}
    }
);

const winning = mongoose.model("winnig", productSchema);
module.exports= winning;