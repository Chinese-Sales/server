const mongoose=require(mongoose);

const orderSchema=mongoose.Schema({
item_id:String,
item_description:String,
price:Number,
});
module.export(orderSchema);