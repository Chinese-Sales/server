const express = require('express')
const router = express.Router()
const userControler=require("../controlers/user");

// http://localhost:4500/users/1
router.post("",userControler.addUser)
router.post("",userControler.addOrderToUser)
router.get("/:id", userControler.getProductsByUserId)

module.exports = router;
