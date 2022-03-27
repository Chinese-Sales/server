const mongoose = require("mongoose");
//const orderSchema=require("orderSchema");

const userSchema = mongoose.Schema({
    user_first_name: { type: String, required: true },
    user_last_name: { type: String, required: true },
    user_phone:{type:String, },
    user_orders: {type:[orderSchema]},
});

const Product = mongoose.model("product", productSchema);
module.exports= Product;