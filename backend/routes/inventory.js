const router =
require("express").Router()

const Inventory =
require("../models/Inventory")

router.get("/",
async(req,res)=>{

  const inventory =
  await Inventory.find()

  res.json(
    inventory
  )

})

router.post("/",
async(req,res)=>{

  const item =
  await Inventory.create(
    req.body
  )

  res.status(201).json(item)

})

module.exports = router
