const Product = require("../models/product.model").Product;

module.export.getAllProducts = async (req, res) => {
    const a = await Product.find({});
    return res.send(a);
}

module.export.getProductById = async (req, res) => {
    let id = req.params.id;
    let prod = await Product.find({ "product.id": id });
    return res.send(prod);
}

module.export.addProduct = async (req, res) => {
    let prod = req.body;
   let p = new Product(prod);
    try {
       await p.save();
       console.log(p);
       return res.send(p);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

module.export.deleteProduct=async (req,res)=>{
    let prodId= res.params.id;
    try{
        const p =await Product.findByIdAndRemove(id);
        console.log(p);
        return res.send(p);
    }
    catch(e){
        console.log(e);
        return res.status(400).send(e);
    }
}
