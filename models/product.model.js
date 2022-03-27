const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    item_name: { type: String, required: true },
    item_description: { type: String},
    item_price: { type: String, required:true}
});

const Product = mongoose.model("product", productSchema);
module.exports ={ Product,productSchema};