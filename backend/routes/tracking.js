const router = require("express").Router()

const Tracking =
require("../models/Tracking")

router.get("/:code", async(req,res)=>{

  const tracking =
  await Tracking.findOne({
    internalCode:req.params.code
  })

  res.json(tracking)

})

module.exports = router
