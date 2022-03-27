const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_first_name: { type: String, required: true },
    user_last_name: { type: String, required: true },
    user_phone:{type:String, },
    user_orders: { type: [Product], },
    item_price: { type: String, }
});

// const orderSchema= mongoose.Schema({
//     item_id: {type: String, },
//     item_name
// });

const Product = mongoose.model("product", productSchema);
module.exports= Product;