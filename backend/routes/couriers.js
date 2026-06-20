const router =
require("express").Router()

const CourierProvider =
require("../models/CourierProvider")

router.get("/",
async(req,res)=>{

  const providers =
  await CourierProvider.find()

  res.json(providers)

})

module.exports = router
