const router = require("express").Router()

const Wallet =
require("../models/Wallet")

const Transaction =
require("../models/Transaction")

router.get("/:userId", async(req,res)=>{

  const wallet =
  await Wallet.findOne({
    userId:req.params.userId
  })

  res.json(wallet)

})

router.get("/:userId/history", async(req,res)=>{

  const transactions =
  await Transaction.find({
    userId:req.params.userId
  })

  res.json(transactions)

})

module.exports = router
