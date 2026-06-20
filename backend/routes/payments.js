const router = require("express").Router()

const paynow =
require("../config/paynow")

router.post("/checkout", async(req,res)=>{

  try{

    const {
      email,
      amount
    } = req.body

    const payment =
    paynow.createPayment(
      "Starry Mobile Space",
      email
    )

    payment.add(
      "Order Payment",
      amount
    )

    const response =
    await paynow.send(payment)

    if(response.success){

      return res.json({
        redirectUrl:
        response.redirectUrl
      })

    }

    return res.status(400).json({
      message:"Payment Failed"
    })

  }catch(err){

    res.status(500).json({
      message:err.message
    })

  }

})

module.exports = router
