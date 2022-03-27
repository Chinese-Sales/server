const Winnig=require("../models/winning.model").Winnig;
const {User}=require("../models/user.model");
const {Product}=require("../models/product.model");

module.exports.addWinning=async(req,res)=>{
    let winning=req.body;
    let a=new Winnig(winning);
    try {
        await a.save();
        console.log(a);
        return res.send(a);
    } 
    catch (error) {
        console.log(e);
        return res.status(400).send(e);
    }
}
module.exports.getAllUsersForLottery=async(req,res)=>{
    let IdPro=req.params.id;
    let users=await User.find((user)=>user.user_orders.some(prod => prod.id === IdPro));
    return res.send(users);
}
module.exports.getUserByWinningId=async(req,res)=>{
    let IdWin=req.params.id;
    let user=await Winnig.find((win) => win.id=IdPro)
    return res.send(user);
}
module.exports.getUserByProId=async(req,res)=>{
    let IdPro=req.params.id;
    let user=await Winnig.find((win) => win.winning_item_id=IdPro)
    return res.send(user);
}