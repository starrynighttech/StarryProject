const router = require("express").Router()

const User =
require("../models/User")

const Order =
require("../models/Order")

router.get("/stats", async(req,res)=>{

  const users =
  await User.countDocuments()

  const orders =
  await Order.countDocuments()

  const revenueOrders =
  await Order.find({
    paymentStatus:"paid"
  })

  const revenue =
  revenueOrders.reduce(
    (sum,item)=>
      sum + item.total,
    0
  )

  res.json({
    users,
    orders,
    revenue
  })

})

module.exports = router
