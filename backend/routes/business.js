const router =
require("express").Router()

const Business =
require("../models/Business")

router.post("/",
async(req,res)=>{

  const business =
  await Business.create(
    req.body
  )

  res.status(201).json(
    business
  )

})

router.get("/",
async(req,res)=>{

  const businesses =
  await Business.find()

  res.json(
    businesses
  )

})

module.exports = router
