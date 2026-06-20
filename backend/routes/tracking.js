const router =
require("express").Router()

const Tracking =
require("../models/Tracking")

router.get("/:code",
async(req,res)=>{

  const tracking =
  await Tracking.findOne({
    internalCode:req.params.code
  })

  if(!tracking){
    return res.status(404).json({
      message:"Tracking not found"
    })
  }

  res.json(tracking)

})

module.exports = router
