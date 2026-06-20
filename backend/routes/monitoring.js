const router =
require("express").Router()

const SystemMetric =
require("../models/SystemMetric")

router.get("/stats",
async(req,res)=>{

  const metrics =
  await SystemMetric
  .find()
  .sort({
    createdAt:-1
  })
  .limit(20)

  res.json(metrics)

})

module.exports =
router
